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

