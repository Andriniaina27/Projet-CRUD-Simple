<<<<<<< HEAD
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService, Produit } from '../services/produit';
import { Router } from '@angular/router';
=======
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService, Produit } from '../services/produit';
>>>>>>> 552007edcdd6838351018d3a3348646068d610e4

@Component({
  selector: 'app-produits-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits-list.component.html'
})
<<<<<<< HEAD
export class ProduitsListComponent implements OnInit {
  // produits = signal<Produit[]>([]);
  erreur = signal('');
  produits: Produit[] = [];

  constructor(private produitService: ProduitService, private router: Router) {
    // this.produitService.getProduits().subscribe({
    //   next: (data: Produit[]) => this.produits.set(data),
    //   error: (err: any) => this.erreur.set('Impossible de charger les produits.')
    // });
  }

  ngOnInit() {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.getProduits().subscribe({
      next: (data) => this.produits = data,
      error: (err) => console.error('Erreur chargement produits :', err)
    });
  }

  supprimerProduit(id : number){
    if(confirm("Voulez-vous vraiment supprimer ce produit ?")){
      this.produitService.deleteProduit(id).subscribe({
        next: () => this.chargerProduits(),
        error: (err) =>console.error('Erreur ', err)
      })
    }
  }
=======
export class ProduitsListComponent {
  produits = signal<Produit[]>([]);
  erreur = signal('');

  constructor(private produitService: ProduitService) {
    this.produitService.getProduits().subscribe({
      next: (data: Produit[]) => this.produits.set(data),
      error: (err: any) => this.erreur.set('Impossible de charger les produits.')
    });
  }
>>>>>>> 552007edcdd6838351018d3a3348646068d610e4
}
