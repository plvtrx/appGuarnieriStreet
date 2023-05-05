import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.listaProdutos = produtos;
      }
    )
  }

}
