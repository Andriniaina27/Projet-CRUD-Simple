from rest_framework import serializers
from .models import Produits

class ProduitSerializers(serializers.ModelSerializer):
    class Meta:
        model = Produits
        fields = '__all__'