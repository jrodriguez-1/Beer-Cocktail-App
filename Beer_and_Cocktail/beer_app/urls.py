from . import views
from django.urls import path, include
from .views import  BeerViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as jwt_views
from .views import PostBeer



router = DefaultRouter()
router.register(r'beers', views.BeerViewSet, basename='beers')

urlpatterns = [
    # path('current_user/', current_user),
    # path('users/', UserView.as_view()),
    path('', include(router.urls)),
    path('addbeer/', PostBeer.as_view),
]


