import { Component, OnInit } from '@angular/core';

//API
import {ApiService} from './../../api.service'

@Component({
  selector: 'app-lista-api',
  templateUrl: './lista-api.page.html',
  styleUrls: ['./lista-api.page.scss'],
})
export class ListaAPIPage implements OnInit {
  //APPI
  datauser: any;

  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.getDataUser();
  }
  async getDataUser() {
    await this.api.getDataUser()
      .subscribe(res => {
        console.log(res);
        this.datauser = res.results;
		console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }

}
