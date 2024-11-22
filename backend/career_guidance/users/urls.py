from django.urls import path
from .views import TestView, RegisterView



urlpatterns = [
    path('test/',TestView.as_view(), name='test'),
    path('register', RegisterView.as_view(), name='register')
]