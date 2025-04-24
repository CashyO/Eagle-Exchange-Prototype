from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import * 

router = DefaultRouter()
router.register('information', RegisterViewset, basename='information')
router.register('verification', VerificationEmailViewset, basename='verification')
router.register('login', LoginViewset, basename='login')
router.register(r'priceType', PriceTypeViewSet, basename='priceType')
# contact type
router.register(r'contactType', ContactTypeViewSet, basename='contactType')
router.register(r'characteristic', CharacteristicViewSets, basename='characteristic')
router.register(r'userListing', UserListingViewSets, basename='userListing')
# The router automatically generates the URL conf for the viewsets

urlpatterns = router.urls
