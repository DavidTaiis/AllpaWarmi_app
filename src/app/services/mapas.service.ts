import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-mapas'
})
export class MapasService{
  constructor() { }
  createMap(){
    const mapRef = document.getElementById('map');
      GoogleMap.create({
      id: 'my-map',
      element:mapRef,
      apiKey: environment.google_maps_api_key,
      config: {
        center: {
          lat: -2.8990419855354235, 
          lng: -79.00755362380936,
        },
        zoom: 12,
      },
    });
  }
}
