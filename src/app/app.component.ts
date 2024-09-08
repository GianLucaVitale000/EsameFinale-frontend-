import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdottiComponent } from './prodotti/prodotti.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdottiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EsameFinale';
}
