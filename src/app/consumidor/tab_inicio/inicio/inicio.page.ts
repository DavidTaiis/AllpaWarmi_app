import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.createMap();
  }
  async createMap() {
    console.log('aqui');
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

}
