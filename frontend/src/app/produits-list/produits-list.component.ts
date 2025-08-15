import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService, Produit } from '../services/produit';

@Component({
  selector: 'app-produits-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits-list.component.html'
})
export class ProduitsListComponent {
  produits = signal<Produit[]>([]);
  erreur = signal('');

  constructor(private produitService: ProduitService) {
    this.produitService.getProduits().subscribe({
      next: (data: Produit[]) => this.produits.set(data),
      error: (err: any) => this.erreur.set('Impossible de charger les produits.')
    });
  }
}
