import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produit, ProduitService } from '../services/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produits-add.component.html'
})
export class ProduitAddComponent {
  nom = signal('');
  prix = signal<number | null>(null);
  en_stock = signal(true);

  constructor(private produitService: ProduitService, private router: Router) {}

  ajouterProduit() {
    if (!this.nom() || this.prix() === null) return;

    const newProduit: Produit = {
      id: 0,
      nom: this.nom(),
      prix: this.prix()!,
      en_stock: this.en_stock()
    };

    this.produitService.createProduit(newProduit).subscribe({
      next: () => this.router.navigate(['/produits']),
      error: () => console.error('Erreur création :', ),
    });
  }
}
