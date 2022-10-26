import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  modal:any;
  feature:any = [];
  localizacion:any;

  constructor(public modalController: ModalController, private tabagricultorasService: TabAgricultorasService ) { }

  ngOnInit() {
    this.modal = "HuertoVenta";
  this.localizacion = false;
  this.getGeolocationMa();
  }
  getGeolocationMa(){
  
    this.tabagricultorasService.getGeolocalizacionMa()
      .subscribe( (res) => {
       this.feature = res;
      },
      response => {
        console.log(response['error']['warning'][0]['value'])
    },
    () => {
        console.log("The POST observable is now completed.");
    });
    
    }
}
