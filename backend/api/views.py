from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import secrets
import redis
from django.conf import settings

db = redis.Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, decode_responses=True)

GETDEL_LUA = """
local v = redis.call('GET', KEYS[1])
if v then
  redis.call('DEL', KEYS[1])
  return v
else
  return nil
end
"""

class EsconderSecreto(APIView):

    def post(self, dato):
        secret = dato.data.get("secret")

        for _ in range(10):
            key = secrets.token_urlsafe(24) 

            ok = db.setnx(key, secret)
            if ok:
                return Response({"key": key})
        return Response({"error": "Llave no generada"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class MostrarSecreto(APIView):
    def post(self, dato):

        key = dato.data.get("key")

        try:
            val = db.eval(GETDEL_LUA, 1, key)
        except redis.RedisError:
            val = db.get(key)
            if val:
                db.delete(key)

        if val:
            return Response({"secret": val})
        else:
            return Response({"error": "key not found or already revealed"}, status=status.HTTP_404_NOT_FOUND)

        
