import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geolocalizacion-salida',
  templateUrl: './geolocalizacion-salida.page.html',
  styleUrls: ['./geolocalizacion-salida.page.scss'],
})
export class GeolocalizacionSalidaPage implements OnInit {

  constructor(public Mapa:MapasService, private router:Router) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }

  registrarSalida(){
    this.router.navigate(['/c_privado/geolocalizacion-llegada'])
  }

}
