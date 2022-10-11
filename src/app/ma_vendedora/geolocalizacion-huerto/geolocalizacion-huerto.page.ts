import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-geolocalizacion-huerto',
  templateUrl: './geolocalizacion-huerto.page.html',
  styleUrls: ['./geolocalizacion-huerto.page.scss'],
})
export class GeolocalizacionHuertoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  continuar(){
    this.router.navigate(['/ma_vendedora/geolocalizacion-venta'])
  }
  
}
