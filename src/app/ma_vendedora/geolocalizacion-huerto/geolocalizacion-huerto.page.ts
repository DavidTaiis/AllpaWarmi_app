import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';

@Component({
  selector: 'app-geolocalizacion-huerto',
  templateUrl: './geolocalizacion-huerto.page.html',
  styleUrls: ['./geolocalizacion-huerto.page.scss'],
})
export class GeolocalizacionHuertoPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }
  
}
