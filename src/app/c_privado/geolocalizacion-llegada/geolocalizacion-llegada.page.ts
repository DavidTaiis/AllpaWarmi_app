import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-geolocalizacion-llegada',
  templateUrl: './geolocalizacion-llegada.page.html',
  styleUrls: ['./geolocalizacion-llegada.page.scss'],
})
export class GeolocalizacionLlegadaPage implements OnInit {

  constructor(public Mapa:MapasService, private router:Router) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }

  registrarLlegada(){
    this.router.navigate(['/c_privado/menu/inicio']);
  }
}
