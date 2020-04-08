import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any; // navegando
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu(); //menu lateral
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Compra",
        url   : "/compra",
        icon  : "cart"
      },
      {
        title : "Lista de Usuarios",
        url   : "/lista-api",
        icon  : "construct"
      }/**,
      {
        title : "Bebidas",
        url   : "/bebidas",
        icon  : "beer"
      }

       ,
      {
        title : "compra",
        url   : "/compra",
        icon  : "chatboxes"
      },
      {
        title : "datos",
        url   : "/datos",
        icon  : "contacts"
      },*/
    ]
  }
}
