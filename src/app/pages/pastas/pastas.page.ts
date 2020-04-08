import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-pastas',
  templateUrl: './pastas.page.html',
  styleUrls: ['./pastas.page.scss'],
})
export class PastasPage implements OnInit {
  public producto: any;
  
  constructor(   
     private activeRoute:ActivatedRoute,
     public alerta:AlertController
     ) { }

  ngOnInit() {
    this.producto=[
      {
        id:0,
        nombre:"Fideo Plano - 81",
        imagen:"http://industriasantamariaspiga.com/img/products/big_c76d8825e16458d9855ed801fd4c9ebf38e6eb6a.jpg",
        presentacion:"En empaques de polietileno transparente de baja dendidad de 400g, 1 kg",
        categoria:"Pasta Larga",
        url:"",
        productos:
        [{
          minerales:"",
          vitaminas:"",
          grasas:""
        }]
      },
      {
        id:1,
        nombre:"Fideo del Pais Ancho - 81 A",
        imagen:"http://industriasantamariaspiga.com/img/products/big_5cd66dc6470848fda27b8fef1b5fb19c9d4806ec.jpg",
        presentacion:"En empaques de polietileno transparente de baja dendidad de 400g, 1 kg",
        categoria:"Pasta Larga",
        url:"",
        productos:
        [{
          minerales:"",
          vitaminas:"",
          grasas:""
        }]
      },
      {
        id:2,
        nombre:"Cabello de Angel - 82",
        imagen:"http://industriasantamariaspiga.com/img/products/big_1ccb5358278e823d7ed7128b38307db4e54ff63d.jpg",
        presentacion:"En empaques de polietileno transparente de baja dendidad de 400g, 1 kg",
        categoria:"Pasta Larga",
        url:"",
        productos:
        [{
          minerales:"",
          vitaminas:"",
          grasas:""
        }]
      },
      {
        id:3,
        nombre:"Fideo Trebol Mediano - 83",
        imagen:"http://industriasantamariaspiga.com/img/products/big_8ca2a199a8bd4f3dac5415ba744afcccc5484c8c.jpg",
        presentacion:"En empaques de polietileno transparente de baja dendidad de 400g, 1 kg",
        categoria:"Pasta Larga",
        url:"",
        productos:
        [{
          minerales:"",
          vitaminas:"",
          grasas:""
        }]
      },
      {
        id:4,
        nombre:"Nido Plano - 84",
        imagen:"http://industriasantamariaspiga.com/img/products/big_ca1fb1b54030014ca851b43246e897a46b2ab824.jpg",
        presentacion:"En empaques de polietileno transparente de baja dendidad de 400g, 1 kg",
        categoria:"Pasta Larga",
        url:"",
        productos:
        [{
          minerales:"",
          vitaminas:"",
          grasas:""
        }]
      },
      {
        id:5,
        nombre:"Nido Trebol - 86",
        imagen:"http://industriasantamariaspiga.com/img/products/big_9656c17132fbc6ec071158ffdbf24607a3d89008.jpg",
        presentacion:"En empaques de polietileno transparente de baja dendidad de 400g, 1 kg",
        categoria:"Pasta Larga",
        url:"",
        productos:
        [{
          minerales:"",
          vitaminas:"",
          grasas:""
        }]
      },
      {
        id:6,
        nombre:"Tallarin Ancho - 92",
        imagen:"http://industriasantamariaspiga.com/img/products/big_2bc6ec92e095d3444a6c9b28c2a9b440e748f6f8.jpg",
        presentacion:"En empaques de polietileno transparente de baja dendidad de 400g, 1 kg",
        categoria:"Pasta Larga",
        url:"",
        productos:
        [{
          minerales:"",
          vitaminas:"",
          grasas:""
        }]
      }
      
      
    ];

  }// --------------------fin ngOnInit
  /** Alerta con descripcion del producto */
  async cabelloAngel() {
    const alert = await this.alerta.create({
      header: 'Fideos Largos',
      subHeader: 'Cabello de Angel',
      message: 'This is an alert message.',
      buttons: ['COMPRA']
    });    await alert.present();  }

    async spaghetto() {
      const alert = await this.alerta.create({
        header: 'Fideos Largos',
        subHeader: 'Spaghetto',
        message: 'This is an alert message.',
        buttons: ['OK']
      });    await alert.present();  }

      async linguini() {
        const alert = await this.alerta.create({
          header: 'Fideos Largos',
          subHeader: 'Linguini',
          message: 'This is an alert message.',
          buttons: ['OK']
        });    await alert.present();  }

}
