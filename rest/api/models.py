from django.db import models


class Produits(models.Model):
    nom = models.CharField(max_length= 255)
    prix = models.DecimalField(max_digits=8, decimal_places=2)
    en_stock = models.BooleanField(default=True)

    def __str__(self):
        return self.nom

# Create your models here.
