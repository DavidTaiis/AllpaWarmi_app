import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  orders:any;
  constructor(private sellerServices: TabTransporteService) { 
    this.getOrders();
  }

  ngOnInit() {}

  getOrders(){
    this.sellerServices.getOrdersBySeller()
    .subscribe(res => {
      this.orders = res;
    })
  }
}
