import { Routes } from '@angular/router';
import { ProduitAddComponent } from './produits-add/produits-add.component';
import { ProduitsListComponent } from './produits-list/produits-list.component';

export const routes: Routes = [
    { path : '', redirectTo: '/produits', pathMatch: 'full' },
    { path : 'produits', component: ProduitsListComponent },
    { path : 'produits/add', component:  ProduitAddComponent},
];
