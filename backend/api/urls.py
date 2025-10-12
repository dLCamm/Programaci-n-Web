from django.urls import path
from . import views

urlpatterns = [
    path("hide/", views.EsconderSecreto.as_view(), name="hide"),
    path("show/", views.MostrarSecreto.as_view(), name="show"), 
]
