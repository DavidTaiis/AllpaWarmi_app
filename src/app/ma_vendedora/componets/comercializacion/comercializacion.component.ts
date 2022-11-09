import { Component, OnInit } from '@angular/core';
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
  constructor(public agricultorasService: TabTransporteService) { 

  }
  ngOnInit() {
    this.getComercio();
    this.modal = "HuertoVenta";
  }


  getComercio(){
    this.agricultorasService.getComercio().subscribe( res => {
      this.feature = res;
      console.log(this.feature)
    })
  }
}
