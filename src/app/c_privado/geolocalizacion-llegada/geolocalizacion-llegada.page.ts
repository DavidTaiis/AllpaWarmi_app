import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-geolocalizacion-llegada',
  templateUrl: './geolocalizacion-llegada.page.html',
  styleUrls: ['./geolocalizacion-llegada.page.scss'],
})
export class GeolocalizacionLlegadaPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  registrarLlegada(){
    this.router.navigate(['/c_privado/menu/inicio']);
  }

}
