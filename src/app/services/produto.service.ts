import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Produto 
{
  idproduto:number,
  fkmarca: number,
  nome: string,
  preco: number
}

@Injectable({
  providedIn: 'root'
})

export class ProdutoService 
{

  private URL = "https://etecsalesgomespam-default-rtdb.firebaseio.com/produto/.json";

  constructor(private http: HttpClient) { }

  getProdutos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.URL);
  }
}
