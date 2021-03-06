import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Categorias',
      url: '/folder/categorias',
      icon: 'person'
    },
    {
      title: 'Login',
      url: '/folder/login',
      icon: 'person'
    },
    {
      title: 'Registro',
      url: '/folder/registro',
      icon: 'person'
    },
    {
      title: 'Categorias',
      url: '/folder/categorias',
      icon: 'archive'
    },
    {
      title: 'Lista',
      url: '/folder/lista',
      icon: 'trash'
    },
    {
      title: 'Configuracion',
      url: '/folder/configuracion',
      icon: 'warning'
    }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
