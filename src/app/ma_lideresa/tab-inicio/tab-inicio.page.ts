import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { LiderezaService } from 'src/app/services/ma_lidereza/lidereza.service';
@Component({
  selector: 'app-tab-inicio',
  templateUrl: './tab-inicio.page.html',
  styleUrls: ['./tab-inicio.page.scss'],
})
export class TabInicioPage implements OnInit {
  modal:any;
  feature:any = [];

  constructor(public Mapa:MapasService, private liderezaService: LiderezaService) { }

  ngOnInit() {
    this.modal = "HuertoVenta";
    this.getSellerPoints();
  }

  getSellerPoints(){
    this.liderezaService.getSellerPoints().
    subscribe( res => {
      this.feature = res;
    })
  }

}
