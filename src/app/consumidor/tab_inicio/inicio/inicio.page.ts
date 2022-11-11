import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { AcopiadoraService } from 'src/app/services/ma_acopiadora/acopiadora.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  modal:any;
  feature:any = [];
  localizacion:any;
  valueSelected: string  = "1";
  acopios:any;
  constructor(public modalController: ModalController, private tabagricultorasService: TabAgricultorasService, private acopiadoraService:AcopiadoraService) { }
  
  async ngOnInit() {
    this.getAcopios();
  await this.getGeolocationMa();

  
  this.modal = "HuertoVenta";
  this.localizacion = false;
  }
 
   getGeolocationMa(){
  
   this.tabagricultorasService.getGeolocalizacionMa()
     .subscribe( (res) => {
      this.feature = null;
      this.feature = res;
     },
     response => {
       console.log(response['error']['warning'][0]['value'])
   },
   () => {
       console.log("The POST observable is now completed.");
   });
   
   }
   segmentChange(event: CustomEvent){
    this.valueSelected = event.detail.value;
  }

  getAcopios(){
    this.acopiadoraService.getAcopios().subscribe( res => {
      this.acopios = res;
    })
  }
}

