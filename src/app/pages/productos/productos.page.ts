import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public productos: string;
  public lproducto: any;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
   
    this.lproducto=[
      {
        nombre:"Coca cola",
        logo:"https://commons.wikimedia.org/wiki/File:Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg",
        descripcion:"coca cola sin azucar"

      },
      {
        nombre:"Pan",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Marraqueta_pace%C3%B1a.jpg/120px-Marraqueta_pace%C3%B1a.jpg",
        descripcion:"pan sin bromuro"
      }
    ];
  }

}
