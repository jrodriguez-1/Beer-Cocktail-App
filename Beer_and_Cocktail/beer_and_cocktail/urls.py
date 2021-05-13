"""beer_and_cocktail URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView,)
from rest_framework import routers
from beer_app.urls import router
from cocktail_app.urls import router
from user_app.views import TokenObtainView





urlpatterns = [
    path('admin/', admin.site.urls),
    path('beer/', include('beer_app.urls')),
    path('cocktail/', include('cocktail_app.urls')),
    path('api/user/', include('user_app.urls', namespace='user')),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

]

# superuser 
# username: jrod
# password: password