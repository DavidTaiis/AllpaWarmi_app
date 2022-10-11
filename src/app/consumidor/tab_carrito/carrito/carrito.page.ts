import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  id:any;
  farmer:any;
  name: any;
  phone:any;
  products:any;
  dateDeliver:any;
  total:any;
  data:any;

  constructor(private tabAgricultorasServices: TabAgricultorasService) {

   }

 async ngOnInit() {
    this.getCarProducts();
    this.getTotal();
  }
  async getCarProducts(){
  this.products = JSON.parse(localStorage.getItem('products')) ;
   
    
  }

 async getTotal(){
    
    let productos = JSON.parse(localStorage.getItem('products')) ;
    for (let index = 0; index < productos.length; index++) {
       this.total = this.total + productos[index]['subtotal'];   
      
    }
 }
/* 
 createOrder(){
  let idSeller = this.products[0]['users_id'];
    return this.tabAgricultorasServices.createOrder(idSeller,this.total,this.dateDeliver,).subscribe( async res =>){

    } 
  }*/
  
}
