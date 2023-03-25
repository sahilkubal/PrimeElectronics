from django.contrib import admin
from . models import Products 

class ProductsAdminModel(admin.ModelAdmin):
    list_display = ["name","category","price"]

admin.site.register(Products, ProductsAdminModel)
