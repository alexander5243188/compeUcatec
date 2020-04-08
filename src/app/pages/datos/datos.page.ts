import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
   
  public nombre;
  public apellido;
  public email;
  public password;


  constructor() {   }

  ngOnInit() {   
  }
  agregar_usuario(){      console.log(this.nombre+" "+this.apellido+" "+this.email+" "+this.password+" ");    }// ---- fin de funcion
}
