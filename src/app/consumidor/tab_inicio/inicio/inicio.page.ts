import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GooglemapsComponent } from '../../../googlemaps/googlemaps/googlemaps.component'
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public feature:Array<any> = [];
  

  constructor(public modalController: ModalController) { }
  
  ngOnInit() {
   
    this.feature = [
      {
        position:{  
            lat: -33.91721,
            lng: 151.2263
      },
        type: "info",
      },
      {
        position: {  
            lat: -33.91539,
            lng: 151.2282
      },
        type: "info",
      },
      {
        position: {  
            lat: -33.91747,
            lng: 151.22912
      },
        type: "info",
      },
      {
        position: {  
            lat: -33.9191,
            lng: 151.22907
      },
        type: "info",
      },
      {
        position: {  
            lat: -33.91725,
            lng: 151.23064
      },
        type: "info",
      },
      {
        position:{  
            lat: -33.91872,
            lng: 151.23089
      },
        type: "info",
      },
      {
        position: {  
            lat: -33.91682,
            lng: 151.23149
      },
        type: "info",
      },
      {
        position: {  
            lat: -33.9179,
            lng: 151.23463
      },
        type: "info",
      },
      {
        position: {  
            lat: -33.91666,
            lng: 151.23468
      },
        type: "info",
      },
      {
        position:{  
            lat: -33.916988,
            lng: 151.23364
      },
        type: "info",
      },
      
      {
        position: {  
            lat: -33.91662347903106,
            lng: 151.22879464019775
      },
        type: "parking",
      },
      {
        position: {  
            lat: -33.916365282092855,
            lng: 151.22937399734496
      },
        type: "parking",
      },
      {
        position: {  
            lat: -33.91665018901448,
            lng: 151.2282474695587
      },
        type: "library",
      },
    ];
  }

  ngAfterViewInit(){
    
  }
  
}

