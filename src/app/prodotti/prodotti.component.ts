import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProdottiServizio } from '../../services/prodotti.service';

export interface Prodotti {
  nome: string;
  descrizione: string;
  prezzo: number; // BigDecimal
  marca: string;
};


@Component({
  selector: 'app-prodotti',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.css'
})
export class ProdottiComponent implements OnInit{

  backendProdotti!: Prodotti[];

  constructor(private service: ProdottiServizio) {}

  ngOnInit(){
    this.service.getProdotti().subscribe(data => {
      this.backendProdotti = data
    })
  }

}
