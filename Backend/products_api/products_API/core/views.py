from django.shortcuts import render
from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView
from . serializer import ProductsSerializer
from . models import Products 

class CreateProductView(CreateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class UpdateProductView(UpdateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    
class DeleteProductView(DestroyAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class AllProductsView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class GetProductView(RetrieveAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer