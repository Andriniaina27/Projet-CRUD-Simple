import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule],
  template: `
    <h1>Gestion des Produits</h1>
    <nav>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class App {}
