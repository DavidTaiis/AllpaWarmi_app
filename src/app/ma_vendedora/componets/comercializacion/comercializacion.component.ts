import { Component, OnInit } from '@angular/core';
import { AcopiadoraService } from 'src/app/services/ma_acopiadora/acopiadora.service';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-comercializacion',
  templateUrl: './comercializacion.component.html',
  styleUrls: ['./comercializacion.component.scss'],
})
export class ComercializacionComponent implements OnInit {
  feature:any;
  modal:any;
  profile:any;
  acopios:any;
  constructor(public agricultorasService: TabTransporteService, public acopiadoraService: AcopiadoraService) { 

  }
  ngOnInit() {
    this.getComercio();
    this.getAcopios();
    this.modal = "HuertoVenta";
  }


  getComercio(){
    this.agricultorasService.getComercio().subscribe( res => {
      this.feature = res;
    })
  }

  getAcopios(){
    this.acopiadoraService.getAcopios().subscribe( res => {
      this.acopios = res;
    })
  }
}
