from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, viewsets, permissions, status
from .models import Cocktail
from django.http import HttpResponseRedirect
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import CocktailSerializer
# from django.contrib.auth.models import User
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

User = get_user_model()

class CocktailViewSet(viewsets.ModelViewSet):
    queryset = Cocktail.objects.all()
    serializer_class = CocktailSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    

