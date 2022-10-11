import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  constructor(public Mapa:MapasService, private router:Router) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }

  registrarParada(){
    this.router.navigate(['/c_camioneta/menu/inicio']);
  }
}
