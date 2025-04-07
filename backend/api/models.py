# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager




    
#MODELS

#create a user manager  class to manage the CustomUser model
class CustomUserManager(BaseUserManager):
     
     #this class will contain two functions, one to manage the normal user and one to manage the superuser(admin)
     
     def create_user(self, email, password=None, first_name=None, last_name=None): 

        email = self.normalize_email(email)
         # Create user object with provided fields
        user = self.model(email=email, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.save(using=self._db)
        return user

     def create_superuser(self,email, password=None, **extra_fields): 

        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)
        
#CustomUser is the model that represent the users
class CustomUser(AbstractUser):

    email = models.EmailField(max_length=200, unique=True)

    username = None  # Remove username field, using email instead

    #AccountVerified = models.BooleanField(default=False)
    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name'] # first_name and lastname are already present in AbstractUser

