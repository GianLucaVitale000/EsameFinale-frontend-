import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Prodotti } from '../app/prodotti/prodotti.component';


@Injectable({
  providedIn: 'root',
})
export class ProdottiServizio {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProdotti() {
    return this.http.get<Prodotti[]>(`${this.baseUrl}/api/prodotti`).pipe(
      tap(data => console.log(data)),
    );
  }
}

