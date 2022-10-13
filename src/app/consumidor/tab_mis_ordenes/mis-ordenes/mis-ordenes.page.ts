import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.page.html',
  styleUrls: ['./mis-ordenes.page.scss'],
})
export class MisOrdenesPage implements OnInit {
  orders:any;
  constructor(private tabAgricultorasService: TabAgricultorasService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    this.tabAgricultorasService.getOrders()
    .subscribe(  (res) => {
      this.orders = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }
}
