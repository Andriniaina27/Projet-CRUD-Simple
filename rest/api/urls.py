from django.urls import path
from .views import ProduitDetailViews, ProduitListCreateViews

urlpatterns = [
    path('produit/', ProduitListCreateViews.as_view(), name='produit'),
    path('produit/<int:pk>/', ProduitDetailViews.as_view(), name='produit-detail'),
]