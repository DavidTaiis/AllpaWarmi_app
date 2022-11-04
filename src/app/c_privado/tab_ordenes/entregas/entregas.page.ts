import { Component, OnInit } from '@angular/core';
import { PrivadoService } from 'src/app/services/c_privado/privado.service';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.page.html',
  styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {
  orders:any;
  constructor(public privadoService: PrivadoService) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders(){
    this.privadoService.getOrders().subscribe( res => {
      this.orders = res;
    })
  }
}
