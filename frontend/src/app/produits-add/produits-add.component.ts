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
<<<<<<< HEAD
  nom: string = '';
  prix: number | null = null;
  en_stock: boolean = true;
=======
  nom = signal('');
  prix = signal<number | null>(null);
  en_stock = signal(true);
>>>>>>> 552007edcdd6838351018d3a3348646068d610e4

  constructor(private produitService: ProduitService, private router: Router) {}

  ajouterProduit() {
<<<<<<< HEAD
    if (!this.nom || this.prix === null) return;

    const newProduit: Produit = {
      id: 0,
      nom: this.nom,
      prix: this.prix,
      en_stock: this.en_stock
=======
    if (!this.nom() || this.prix() === null) return;

    const newProduit: Produit = {
      id: 0,
      nom: this.nom(),
      prix: this.prix()!,
      en_stock: this.en_stock()
>>>>>>> 552007edcdd6838351018d3a3348646068d610e4
    };

    this.produitService.createProduit(newProduit).subscribe({
      next: () => this.router.navigate(['/produits']),
<<<<<<< HEAD
      error: (err) => console.error('Erreur création :', err),
    });
  }
}


=======
      error: () => console.error('Erreur création :', ),
    });
  }
}
>>>>>>> 552007edcdd6838351018d3a3348646068d610e4
