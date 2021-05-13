from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.
class Beer(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorite_beers')
    
    
    def __str__(self):
        return self.name
    
    



