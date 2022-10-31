import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-geolocalizacion-llegada',
  templateUrl: './geolocalizacion-llegada.page.html',
  styleUrls: ['./geolocalizacion-llegada.page.scss'],
})
export class GeolocalizacionLlegadaPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  constructor( private router:Router, private modal:ModalController) { }

  ngOnInit() {
    this.localizacion = true;
  }

  registrarLlegada(){
    this.router.navigate(['/c_privado/menu/inicio']);
    this.modal.dismiss();
    
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }

}
