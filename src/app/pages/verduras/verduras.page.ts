import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {
  public producto:any;

  constructor() { }

  ngOnInit() {
    this.producto=[
      {
        id:0,
        nombre:"Quinua Roja",
        imagen:"http://industriasantamariaspiga.com/img/products/big_44ddb31c17b0d58af86acefbee444b0171274445.jpg",
        presentacion:"A requerimiento del cliente",
        categoria:"Linea Andina",
        url:"",
        valorNutricional:
        [{
          Proteínamin: "12 - 19g"
        }]
      },
      {
        id:1,
        nombre:"Quinua Blanca",
        imagen:"http://industriasantamariaspiga.com/img/products/big_b724e0b204076d2a17d955b28c8454c1ba470f37.jpg",
        presentacion:"A requerimiento del cliente",
        categoria:"Linea Andina",
        url:"",
        valorNutricional:
        [{
          Proteínamin: "12 - 19g"
        }]
      },
      {
        id:2,
        nombre:"Quinua Negra",
        imagen:"http://industriasantamariaspiga.com/img/products/big_664db29f84619f94f30e673efa000200fa6f7571.jpg",
        presentacion:"A requerimiento del cliente",
        categoria:"Linea Andina",
        url:"",
        valorNutricional:
        [{
          Proteínamin: "12 - 19g"
        }]
      }
    ];
  }//------

}
