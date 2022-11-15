import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.page.html',
  styleUrls: ['./detalles-producto.page.scss'],
})
export class DetallesProductoPage implements OnInit {
productCar:any;
productId:any;
product: any;
productName: any;
price: any;
description:any;
measure: any;
quantity: any = 1;
farmer:any;
farmerId:any;
phone:any;
total:any ;
measureProductId:any;
fotoProduct:any;
item:any= 0;

  constructor(private tabAgricultorasService: TabAgricultorasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getProductId();
  }
 
  getProductId(){
    this.tabAgricultorasService.getProductId(this.productId)
    .subscribe(  (res) => {
      this.product = res;
      this.measureProductId = this.product[0]['id'];
      this.productName = this.product[0]['product'];
      this.price = this.product[0]['price'];
      this.description = this.product[0]['description'];
      this.measure = this.product[0]['measure'];
      this.farmer = this.product[0]['farmer']
      this.total = this.product[0]['price'];
      this.phone = this.product[0]['phoneFarmer'];
      this.farmerId = this.product[0]['farmerId'];
      this.fotoProduct = this.product[0]['images'][0] ? this.product[0]['images'][0].url : ""
      console.log(res)
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }

  addQuantity(){
    let auxiliar = parseInt(document.getElementById('quantity').innerHTML);
   this.quantity = auxiliar + 1;
   this.total = this.price * this.quantity;
  }

  lessQuantity(){
    let auxiliar = parseInt(document.getElementById('quantity').innerHTML);
    if( auxiliar <= 1){
    }else{
   this.quantity = auxiliar - 1; 
   this.total = this.price * this.quantity;

  }
  }

  addCar(){
  
    if(localStorage.getItem('products')){
      let productos = JSON.parse(localStorage.getItem('products'))   
      this.item = productos[productos.length -1].item +1;
    }
    
    this.productCar =[{
      "item": this.item,
      "id": this.measureProductId,
      "quantity": this.quantity,
      "productName": this.productName,
      "price": this.price,
      "subtotal" : this.total,
      "measure": this.measure,
      "farmer": this.farmer,
      "phone": this.phone,
      "farmerId": this.farmerId,
      "fotoProduct" : this.fotoProduct
    }]
    
    
    this.tabAgricultorasService.addProduct(this.productCar);
  
  } 

}
