import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-inicial',
  templateUrl: './tab-inicial.page.html',
  styleUrls: ['./tab-inicial.page.scss'],
})
export class TabInicialPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  async goCar(){
    location.href = '/consumidor/tab-inicial/carrito';
}
}
