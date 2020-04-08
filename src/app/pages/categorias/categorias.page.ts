import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  public categoria: any;

  constructor() { }

  ngOnInit() {
    this.categoria=[
      {
        id:0, 
        nombre:"Fideo largos",       
        imagen:"http://industriasantamariaspiga.com/img/products/big_c76d8825e16458d9855ed801fd4c9ebf38e6eb6a.jpg"
      },
      {
        id:0, 
        nombre:"Fideo largos",       
        imagen:"http://industriasantamariaspiga.com/img/products/big_c76d8825e16458d9855ed801fd4c9ebf38e6eb6a.jpg"
      },
      {
        id:0, 
        nombre:"Fideo largos",       
        imagen:"http://industriasantamariaspiga.com/img/products/big_c76d8825e16458d9855ed801fd4c9ebf38e6eb6a.jpg"
      }
    ];
  }//---------- FIN ngOnInit

}
