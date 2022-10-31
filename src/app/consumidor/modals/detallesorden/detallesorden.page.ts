import { Component, Input, OnInit } from '@angular/core';

import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
@Component({
  selector: 'app-detallesorden',
  templateUrl: './detallesorden.page.html',
  styleUrls: ['./detallesorden.page.scss'],
})
export class DetallesordenPage implements OnInit {
  products:any;
  @Input() id:any;
  constructor(private tabAgricultorasService: TabAgricultorasService) { }

  ngOnInit() {
    this.getOrderDetails();
  }
  getOrderDetails(){
    this.tabAgricultorasService.getOrderDetails(this.id)
    .subscribe(  (res) => {
    this.products = res['products'];
    });
  }
}
