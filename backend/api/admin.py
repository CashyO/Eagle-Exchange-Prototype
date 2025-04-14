from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(CustomUser)
# Dimensional Tables
admin.site.register(Characteristic)
admin.site.register(PriceType)
# Fact Table
admin.site.register(UserListing)
