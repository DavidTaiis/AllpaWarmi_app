import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,  FormControl, FormBuilder, Validators } from '@angular/forms';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil-ma',
  templateUrl: './perfil-ma.page.html',
  styleUrls: ['./perfil-ma.page.scss'],
})
export class PerfilMaPage implements OnInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  
  public form: FormGroup;

  constructor(public fb: FormBuilder) {
 
    this.form = this.fb.group({
      'rating': new FormControl([5])
    });
   }

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
}
