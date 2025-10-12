from django.urls import path
from . import views

urlpatterns = [
    path("hide/", views.EsconderSecreto.as_view(), name="hide"),
    path("reveal/", views.MostrarSecreto.as_view(), name="reveal"), 
]
