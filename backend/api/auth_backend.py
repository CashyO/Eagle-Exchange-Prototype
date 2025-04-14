from django.contrib.auth import get_user_model
User = get_user_model()

#Create a class to authentificate user by email
class EmailAuthBackend:
    #in the settings we need to tell Django that we want to use this function to auhenticate instead of the default one 
    def authenticate(self, request, email=None, password=None):
        try: 
            user = User.objects.get(email=email)# check if the user exist in the data base
            if user.check_password(password): #if user exist check the password is correct
                return user 
        except User.DoesNotExist:
            return None
        
    def get_user(self, user_id): 
        try: 
            return User.objects.get(pk=user_id)
        except User.DoesNotExist: 
            return None