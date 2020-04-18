import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbloginService } from '../services/fblogin.service';
import {AlertController} from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public facebook_account;

  public nombre;
  public apellido;
  public telefono;
  public email;
  public fechaN;
  public genero;

  public tipo: string;
  public retorno:string;
  public producto_seleccionado: any;

  public productoPastas: any;
  public categoria:any;


  constructor(
    private activatedRoute: ActivatedRoute,
    public fb:FbloginService,
    public alertCtrl: AlertController,
    private storage: Storage
    ) { }

  ngOnInit() {
    console.log(this.categoria);
    this.categoria= [
      {
        id:0,
        nombre:"Veriedad de Pastas",
        imagen:"assets/img/pastas.jpg"
      },
      {
        id:1,
        nombre:"amaranto",
        imagen:"assets/img/amaranto.jpg"
      },
      {
        id:2,
        nombre:"tunta",
        imagen:"assets/img/tunta.jpg"
      },
      {
        id:3,
        nombre:"Quinua",
        imagen:"assets/img/quinua.jpg"
      }
      
    ];
    //this.retorno="/folder/categorias";
    this.tipo=this.activatedRoute.snapshot.paramMap.get('tipo');
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    

    this.productoPastas =[
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
    ];//---------------------------------------- 

  // if(this.tipo=='categorias')
   //   this.producto_seleccionado=this.categorias[this.folder];

   
  }
  loguearFB(){
   this.facebook_account=this.fb.loginFB();
  }

  agregar_usuario(){
    console.log(this.nombre);
    this.storage.set('nombre',this.nombre).then(()=>{
      this.storage.set('apellido',this.apellido).then(()=>{
        this.storage.set('telefono',this.telefono).then(()=>{
          this.storage.set('email',this.email).then(()=>{
            this.storage.set('fechaN',this.fechaN).then(()=>{
              this.storage.set('genero',this.genero).finally(()=>{
                console.log("OK");
              });
            });
          });
        });
      });
    });
  }
  

   

} //--------------------------------------------------------------

