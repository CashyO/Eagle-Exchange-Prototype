from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import * 

router = DefaultRouter()
router.register('information', RegisterViewset, basename='information')
router.register('verification', VerificationEmailViewset, basename='verification')
urlpatterns = router.urls
