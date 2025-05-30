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

    
#Serializer to deal with the authentification during the login
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop('password', None)#We do this to make sure the password is not visible
        return ret


class PriceTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceType
        fields = ('id', 'name')

# contact type
class ContactTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactType
        fields = ('id', 'name')

class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristic
        fields = ('id', 'name')

class UserListingSerializer(serializers.ModelSerializer):

    # Foreign Key Id - to pull the titles of the Id
    priceType_details = PriceTypeSerializer(source='priceType', read_only=True)
    contactType_details = ContactTypeSerializer(source='contactType', read_only=True)
    characteristics_names = serializers.SerializerMethodField()

    class Meta:
        model = UserListing
        fields = "__all__"  # If you want to bring only certain types of data change this to like something below 
        # fields = ['id', 'name', 'description', 'price', 'priceType', 'characteristic', 'created', 'updated']

    def get_characteristics_names(self, obj):
        return [char.name for char in obj.characteristic.all()]

