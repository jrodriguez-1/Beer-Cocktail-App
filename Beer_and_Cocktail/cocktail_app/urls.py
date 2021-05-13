from . import views
from django.urls import path, include
from .views import CocktailViewSet
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'cocktails', views.CocktailViewSet, basename='cocktails')

urlpatterns = [
    # path('current_user/', current_user),
    # path('users/', UserView.as_view()),
    path('', include(router.urls))
]
