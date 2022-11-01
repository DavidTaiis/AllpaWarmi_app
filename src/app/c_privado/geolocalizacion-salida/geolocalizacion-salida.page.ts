import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { Router } from '@angular/router';
import { PrivadoService } from 'src/app/services/c_privado/privado.service';

@Component({
  selector: 'app-geolocalizacion-salida',
  templateUrl: './geolocalizacion-salida.page.html',
  styleUrls: ['./geolocalizacion-salida.page.scss'],
})
export class GeolocalizacionSalidaPage implements OnInit {

  constructor(public Mapa:MapasService, private router:Router, private privado: PrivadoService) { }
  localizacion:any;
  puntoSelect:any;
  car_plate:any;
  description:any;
  color:any;
  nameRoute:any;
  descriptionRoute:any;
  lat:any;
  lng:any;
  type:any;
  ngOnInit() {
    this.localizacion = true;
  
  }
  registrarSalida(){
    this.lat = this.puntoSelect.lat;
    this.lng = this.puntoSelect.lng;
    this.car_plate = "";
    this.description = "";
    this.color = "";
    this.nameRoute = "";
    this.descriptionRoute = "";
    this.type = "Inicio";
    this.privado.addPrivado(this.car_plate,
      this.description,
      this.color,
      this.nameRoute,
      this.descriptionRoute,
      this.lat,
      this.lng,
      this.type).subscribe( res => {

    })

    this.router.navigate(['/c_privado/geolocalizacion-llegada'])
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }

}
