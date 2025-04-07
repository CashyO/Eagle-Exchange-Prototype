#Bridge between frontend and backend
from rest_framework import serializers 
from .models import * 
from django.contrib.auth import get_user_model 
User = get_user_model() #This is to make sure we always get the latest user model we create, rn the user model is CustomUser

#create a serializer for each model
# serializers are used to convert complex data types (like objects) into  Python datatypes

class RegisterSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('id','email','password', 'first_name', 'last_name')
        extra_kwargs = { 'password': {'write_only':True}}#make the password field write only, so it can't be read from the database
    
    # validated_data is a dictionary that contains the data that was passed in the request body
    # Make sure function such as create() is not inside META
    def create(self, validated_data):
        #call the functions create_user that is in the models.py so we can create a CustomUser
        user = User.objects.create_user(**validated_data)
        return user