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

  componentes:Componente[] =[
    {
      icon:'home',
      name:'pastas'
      
    },
    {
      icon:'home',
      name:'bebidas',
     // redirectTo:'/bebidas'
    },
    {
      icon:'home',
      name:'frutas',
      //redirectTo:'/frutas'
    },
    {
      icon:'home',
      name:'verduras',
      //redirectTo:'/verduras'
    }
  ];
  
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {   
    this.lproducto=[
      {
        id:0,
        nombre:"Banana",
        imagen:"https://th.bing.com/th?id=OIP.0J08gAYz8al4sI5K9kYxVQHaHa&pid=Api&rs=1",
        codigo:"CAD1-01",
        peso:"170 g aprox",
        url:"/lproducto"
      }     
    ];
  }
}

interface Componente {
  icon:string;
  name:string;
 // redirectTo:string;
}
