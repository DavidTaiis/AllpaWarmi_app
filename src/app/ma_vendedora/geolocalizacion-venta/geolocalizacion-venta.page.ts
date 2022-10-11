import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geolocalizacion-venta',
  templateUrl: './geolocalizacion-venta.page.html',
  styleUrls: ['./geolocalizacion-venta.page.scss'],
})
export class GeolocalizacionVentaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  continuar(){
    this.router.navigate(['/ma_vendedora/menu/inicio'])
  }
}
