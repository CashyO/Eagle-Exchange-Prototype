from django.shortcuts import render
from rest_framework import viewsets, permissions 
from .serializers import * 
from .models import * 
from rest_framework.response import Response 
from django.contrib.auth import get_user_model
User= get_user_model()
# Create your views here.
# views are used to handle HTTP requests and return HTTP responses
#create function to delete, create, retrieve..  Users or others models

from django.core.mail import send_mail
from django.conf import settings
from rest_framework.decorators import action
import random

# View RegisterViewset is used to register new users
class RegisterViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self,request): # This is for POST requests
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)# We return what we received it
        else: 
            return Response(serializer.errors,status=400)
    
    def list(self, request):  # This enables GET requests
        users = User.objects.all()
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data)


# View VerificationEmailViewset is used to verify email
def validateEmail(email):
    #Make sure the email is and ERAU email
    if not (email.endswith("@my.erau.edu") or email.endswith("@erau.edu")):
        raise ValueError("Only @my.erau.edu or @erau.edu emails are allowed.")
    
    if not email: 
            raise ValueError('Email is a required field')

class VerificationEmailViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]

    def create(self, request):
        action = request.data.get('action')

        if action == 'send':
            email = request.data.get('email')
            validateEmail(email)

            if not email:
                return Response({'error': 'Email is required'}, status=400)
                
            verification_code = str(random.randint(100000, 999999))

            send_mail(
                'Your Verification Code',
                f'Your code is: {verification_code}',
                settings.DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=False,
            )
            
            request.session['email'] = email
            request.session['code'] = verification_code
            request.session.set_expiry(3600)
            print("SESSION SET:")
            print("Email:", request.session.get('email'))
            print("Code:", request.session.get('code'))


            return Response({'message': 'Verification email sent'})

        elif action == 'verify':
            print("SESSION SET:")
            print("Email:", request.session.get('email'))
            print("Code:", request.session.get('code'))

            code = request.data.get('code')

            session_code = request.session.get('code')
            session_email = request.session.get('email')
            
            if not session_code or not session_email:
                return Response({'error': 'Not Code or Email in the session'}, status=400)

            if (session_code == code):
                return Response({'message': 'Verification successful'})  
            else:
                return Response({'error': 'Wrong code'}, status=400)
       
        
    def list(self, request): # This enables GET requests
        email = request.session.get('email')
        code = request.session.get('code')
        return Response({'session_email': email,'session_code': code})


# Create your views here. (The API views for the project)
# This file contains the views for the API endpoints, which handle incoming requests and return responses.

# Create a viewset for the PriceType model
class PriceTypeViewSet(viewsets.ModelViewSet):
    # Define the permission classes for the viewset (who can access it)
    permission_classes = [permissions.AllowAny]
    # Model to get the data from the database
    queryset = PriceType.objects.all()
    # Translator between the frontend and backend
    serializer_class = PriceTypeSerializer

    # ViewSets
    # List all PriceType objects 
        # This method is called when a GET request is made to the endpoint 
    def list(self, request):
        queryset = PriceType.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
# Create a viewset for the Characteristic model
class CharacteristicViewSets(viewsets.ModelViewSet):
    # Define the permission classes for the viewset (who can access it)
    permission_classes = [permissions.AllowAny]
    # Model to get the data from the database
    queryset = Characteristic.objects.all()
    # Translator between the frontend and backend
    serializer_class = CharacteristicSerializer

    # ViewSets
    # List all Characteristic objects 
        # This method is called when a GET request is made to the endpoint 
    def list(self, request):
        queryset = Characteristic.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

# Create a viewset for the UserListing model
class UserListingViewSets(viewsets.ModelViewSet):
    # Define the permission classes for the viewset (who can access it)
    permission_classes = [permissions.AllowAny]
    # Model to get the data from the database
    queryset = UserListing.objects.all()
    # Translator between the frontend and backend
    serializer_class = UserListingSerializer

    # ViewSets
    # List all UserListing objects 
        # This method is called when a GET request is made to the endpoint 
    def list(self, request):
        queryset = UserListing.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    # Create a new UserListing object
        # This method is called when a POST request is made to the endpoint
    def create(self, request):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=201)
        else:
            return Response(serializers.errors, status=400)
        
    # Retrieve a specific UserListing object by ID
        # This method is called when a GET request is made to the endpoint with an ID 
        # (For the edit page)
    def retrieve(self, request, pk=None):
        queryset = self.queryset.get(pk=pk)
        serializer = self.serializer_class(queryset)
        return Response(serializer.data)
    # Update a specific UserListing object by ID
        # This method is called when a PUT request is made to the endpoint with an ID
        # (For the edit page)
    def update(self, request, pk=None):
        queryset = self.queryset.get(pk=pk)
        serializer = self.serializer_class(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=400)
    # Delete a specific UserListing object by ID
        # This method is called when a DELETE request is made to the endpoint with an ID
        # (For the delete page)
    def destroy(self, request, pk=None):
        queryset = self.queryset.get(pk=pk)
        queryset.delete()
        return Response(status=204)
    



