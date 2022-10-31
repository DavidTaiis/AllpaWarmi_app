import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-detalles-venta',
  templateUrl: './detalles-venta.page.html',
  styleUrls: ['./detalles-venta.page.scss'],
})
export class DetallesVentaPage implements OnInit {
products:any;
id:any;
client:any;
phoneClient:any;
total:any;
place:any;
photo:any;
feature:any;
buscador:any;
miUbicacion:any;
phoneNumber:any;
  constructor(private tabAgricultorasService: TabAgricultorasService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getOrderDetails();
    this.buscador = true;
    this.miUbicacion=true;
  }
  getOrderDetails(){
    this.tabAgricultorasService.getOrderDetails(this.id)
    .subscribe(  (res) => {
      this.client = res['client'];
      this.phoneClient = res['phone_client'];
    this.products = res['products'];
    this.place = res['place'];
    this.photo = res['images'];
    this.total = res['total'];
    this.phoneNumber = this.phoneClient.substring(1);
    this.feature = [{
      'position':{
        'lat': res['position'].lat,
        'lng':res['position'].lng,
      }}
    ]
    });
  }
}
