import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.createMap();
  }
  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: {
          lat: -2.8990419855354235, 
          lng: -79.00755362380936,
        },
        zoom: 14,
      },
    });
  }
  continuar(){
    this.navCtrl.navigateForward("/ma_lideresa/menu/inicio")
  }
}
