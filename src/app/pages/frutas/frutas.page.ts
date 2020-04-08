import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {
  public producto:any;

  constructor(
    private activeRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.producto=[
      {
        id:0,
        nombre:"Amaranto",
        imagen:"http://industriasantamariaspiga.com/img/products/big_39fe6de07d400fa100290641afa6cae494ad35d4.jpg",
        presentacion:"A requerimiento del cliente",
        categoria:"Amaranto",
        url:"",
        valorNutricional:
        [{
          Proteínamin: "12 - 19g"
          
        }]
      }
    ];
  }//-----------------

}
