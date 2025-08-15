from django.shortcuts import render
from rest_framework import generics
from .models import Produits
from .serializers import ProduitSerializers


class ProduitListCreateViews(generics.ListCreateAPIView):
    queryset = Produits.objects.all()
    serializer_class = ProduitSerializers

class ProduitDetailViews(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produits.objects.all()
    serializer_class = ProduitSerializers

# Create your views here.
