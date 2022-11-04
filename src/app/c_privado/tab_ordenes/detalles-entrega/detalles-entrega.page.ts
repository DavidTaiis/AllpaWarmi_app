import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-entrega',
  templateUrl: './detalles-entrega.page.html',
  styleUrls: ['./detalles-entrega.page.scss'],
})
export class DetallesEntregaPage implements OnInit {
  id:any;
  order:any;
  seller:any;
  client:any;
  imageSeller:any;
  imageClient:any;
  productos:any;
  phoneClient:any;
  phoneSeller:any;
  feature:any;
  constructor(private activatedRoute: ActivatedRoute,public agricultorasService: TabAgricultorasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getOrderDetails();
     
  }
  getOrderDetails(){
    this.agricultorasService.getOrderDetails(this.id).subscribe( res => {
      this.seller = res['seller'];
      this.client = res['client'];
      this.imageClient = res['imageClient'];
      this.imageSeller = res['imageSeller'];
      this.productos = res['products'];
      this.phoneClient = res['phone_client'];
      this.phoneClient = this.phoneClient.substring(1);
      this.phoneSeller = res['seller_phone'];
      this.phoneSeller = this.phoneSeller.substring(1);
      this.feature = [{
        'position' : 
        {
          'lat': res['position'].lat,
          'lng': res['position'].lng,
          'type': res['position'].type
        }
      },
      {
        'position' : 
        {
          'lat': res['positionSeller'].lat,
          'lng': res['positionSeller'].lng,
          'type': res['positionSeller'].type
        }
      }
      ]
    })
  }
}
