import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
@Component({
  selector: 'app-geolocalizacion-salida',
  templateUrl: './geolocalizacion-salida.page.html',
  styleUrls: ['./geolocalizacion-salida.page.scss'],
})
export class GeolocalizacionSalidaPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }

}
