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
  localizacion:any;
  puntoSelect:any;
  type:any;
  ngOnInit() {
    this.localizacion = true;
    this.type = "Camioneta";
  }
  registrarSalida(){
    this.router.navigate(['/c_privado/geolocalizacion-llegada'])
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }

}
