from django.urls import path
from .views import RegisterView, UserProfileView, CareerGuidanceView



urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', UserProfileView.as_view(), name='profile' ),
    path('career-guidance/', CareerGuidanceView.as_view(), name='career_guidance'),]