import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
public producto:any;

  constructor(
    private activeRoute:ActivatedRoute,
     
  ) { }

  ngOnInit() {
    this.producto=[
      {
        id:0,
        nombre:"Chuño Blanco",
        imagen:"http://industriasantamariaspiga.com/img/products/big_9b0887194b79b17a663f846fe5d07bc5f9773b87.jpg",
        presentacion:"A requerimiento del cliente",
        categoria:"Tunta",
        url:"",
        valorNutricional:
        [{
          Calorías:"323 kcla",          
          Grasastotales:"1g",          
          Saturadas:"0g",          
          Monosaturadas:"0g",
          Trans:"0g",
          Sodio:"0g",          
          Potasio:"0g",
          Carbohidratos:"79g",
          FibraDietetica:"1g",
          Azucares:"0g",
          Proteínas:"2g",
          VitaminaA:"0mg",
          VitamicaC:"3mg",
          Calcio:"10mg",
          Hierro:"18mg"
        }]
      }
    ];
  }//------------ fin ngOnInit

}
