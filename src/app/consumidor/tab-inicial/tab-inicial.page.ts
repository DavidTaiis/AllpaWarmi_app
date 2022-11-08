import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-inicial',
  templateUrl: './tab-inicial.page.html',
  styleUrls: ['./tab-inicial.page.scss'],
})
export class TabInicialPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
goCar(){
  this.navCtrl.navigateForward(['/consumidor/tab-inicial/carrito'])
}
}
