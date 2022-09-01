import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }
}
