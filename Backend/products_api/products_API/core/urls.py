from django.urls import path 
from . import views as v 
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api/add_product', v.CreateProductView.as_view(), name="add-product"),
    path('api/update/<int:pk>', v.UpdateProductView.as_view(), name="update-product"),
    path('api/delete/<int:pk>', v.DeleteProductView.as_view(), name="delete-product"),
    
    path('api/all_products', v.AllProductsView.as_view(), name="all-product"),
    path('api/product/<int:pk>', v.GetProductView.as_view(), name="product"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
