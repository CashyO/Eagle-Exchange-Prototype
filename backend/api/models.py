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


# Dimensional Tables - Characteristic, PriceType, ListingImage, ExchangeListing
    # Characteristic Table = many-to-many relationship with UserListing
    # PriceType Table = one-to-many relationship with UserListing
    # ListingImage Table = one-to-many relationship with UserListing
    # ExchangeListing Table = one-to-many relationship with UserListing
# Fact Table - UserListing

# Dimensional Tables

    # Character Table
class Characteristic(models.Model):
    # Columns of the Table  
    name = models.CharField(unique=True, max_length=100)
        # It will list everytime when we create a new record
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
        # It will show the name of the country in the admin panel
    def __str__(self):
        return self.name
    
    # League Table 
class PriceType(models.Model):
    # Columns of the Table
    name = models.CharField(unique=True, max_length=100)
        # It will list everytime when we create a new record
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
        # It will show the name of the country in the admin panel
    def __str__(self):
        return self.name
    
    # Creating Fact Table that will have the Foreign Keys of Dimensional Tables
class UserListing(models.Model):
    # Columns of the Table
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    price = models.DecimalField(null=True, max_digits=10, decimal_places=2, default=0.00)
        # Foreign Keys  - giving access to the dimensional tables 
    priceType = models.ForeignKey(PriceType, on_delete=models.CASCADE)
        # Foreign Keys  - allowing to select multiple characteristics
    characteristic = models.ManyToManyField(Characteristic)
        # It will list everytime when we create a new record
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
        # New field for the image 
    
    def __str__(self):
        return self.name
