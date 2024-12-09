from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, UserProfileSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from .ml_model import  recommend_career
from rest_framework_simplejwt.views import TokenObtainPairView
from django.http import HttpResponse
from django.shortcuts import redirect

User = get_user_model()

class UserProfileView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user
    
class RegisterView(APIView):

    def post(self, request):
        serializer = RegisterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save() 
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CareerGuidanceView(APIView):
    permission_classes = [IsAuthenticated] 
    def post(self, request):
       
        skills = request.data.get('skills')
        if not skills:
            return Response({"error": "Skills are required"}, status=status.HTTP_400_BAD_REQUEST)
        
        recommended_career = recommend_career(skills)
        return Response({"recommended_career": recommended_career}, status=status.HTTP_200_OK)
    
class LoginView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            return Response(response.data, status=response.status_code)
        return Response({"error": "Invalid credentials"}, status=response.status_code)