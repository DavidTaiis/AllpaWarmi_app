import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  constructor(public Mapa:MapasService ,private navCtrl: NavController) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }

  continuar(){
    this.navCtrl.navigateForward("/ma_acopiadora/menu/inicio")
  }
}
