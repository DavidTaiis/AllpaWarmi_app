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
  constructor() { }
  
  async ngOnInit() {

  }
 
 
   segmentChange(event: CustomEvent){
    this.valueSelected = event.detail.value;
  }

 
}

