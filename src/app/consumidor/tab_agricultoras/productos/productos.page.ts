import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  id:any;
  farmer:any;
  name: any;
  phone:any;
  products : any;
  constructor(private router:Router, private tabAgricultorasService: TabAgricultorasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getFarmerId();
    this.getProductsId(this.id);
  }
  getFarmerId(){
    this.tabAgricultorasService.getFarmerId(this.id)
    .subscribe(  (res) => {
      this.farmer = res;
      this.name = res['name'];
      this.phone = res['phone']
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
    }

  getProductsId(idFarmer:number){

    this.tabAgricultorasService.getProductsId(idFarmer)
    .subscribe(  (res) => {
     this.products = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }
  goCar(){

    this.router.navigateByUrl('/consumidor/tab-inicial/carrito');
  }
}
