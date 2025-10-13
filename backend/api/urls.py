from django.urls import path
from .views import EsconderSecreto, MostrarSecreto 

urlpatterns = [
    path('hide/', EsconderSecreto.as_view(), name='hide'),
    path('show/', MostrarSecreto.as_view(), name='show'),
]
