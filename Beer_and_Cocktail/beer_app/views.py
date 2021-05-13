from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, viewsets, permissions, status
from .models import Beer
from django.http import HttpResponseRedirect
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import BeerSerializer
# from django.contrib.auth.models import User
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

User = get_user_model()

class BeerViewSet(viewsets.ModelViewSet):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    
class PostBeer(generics.CreateAPIView):
    serializer_class = BeerSerializer
    
    def get_queryset(self):
        user = self.request.query_params.get('id')
        return Beer.objects.filter(user_id=user)







