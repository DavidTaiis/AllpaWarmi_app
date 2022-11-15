import { Component, OnInit } from '@angular/core';
import { LiderezaService } from 'src/app/services/ma_lidereza/lidereza.service';
@Component({
  selector: 'app-tab-inicio',
  templateUrl: './tab-inicio.page.html',
  styleUrls: ['./tab-inicio.page.scss'],
})
export class TabInicioPage implements OnInit {
  modal:any;
  feature:any = [];

  constructor(private liderezaService: LiderezaService) { }

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
