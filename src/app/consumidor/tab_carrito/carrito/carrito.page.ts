import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProductCar } from 'src/app/models/ProductsCar';


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
  place_delivery:any;
  deliverDate:any= "";
  total:any = "";
  data:any = [];

  constructor(private navCtrl: NavController, private tabAgricultorasServices: TabAgricultorasService,private alertController: AlertController) {
    
    this.getCarProducts();
    this.getData();
    this.getTotal();
  }
 async ngOnInit() {
  
  }
  async getCarProducts(){
    if(localStorage.getItem('products')){
      this.products = JSON.parse(localStorage.getItem('products'));
    }else{
    this.products = [{
      farmer: "No hay ninguna",
      farmerId: "0",
      id:0,
      measure: "Na",
      price: "0.00"

    }]
  }
  }

 async getData(){

  if(localStorage.getItem('products')){
    let productos = JSON.parse(localStorage.getItem('products')) ;
    for (let index = 0; index < productos.length; index++) {

      let auxData ={
        "id":productos[index]['id'],
        "subtotal":productos[index]['subtotal'],
        "quantity":productos[index]['quantity'],
               };
        this.data = this.data.concat(auxData);
        this.farmer = productos[index]['farmer'];
        this.phone = productos[index]['phone'];
      }
    }
 }

 getTotal(){
  if(localStorage.getItem('products')){
    let productos = JSON.parse(localStorage.getItem('products')) ;
    for (let index = 0; index < productos.length; index++) {
      this.total = Number(this.total) +Number(productos[index]['subtotal']);
    }
  }else{
    this.total = 0.00;
  }
 }
 
 async createOrder(){
  if(this.total !== 0.00){
  let idSeller = this.products[0]['farmerId'];

    return this.tabAgricultorasServices.createOrder(idSeller,this.total,this.place_delivery,this.deliverDate,this.data)
      .subscribe( async (res) => {
        const alert = await this.alertController.create({
          cssClass:'app-alert',
          header: '¡Exito!',
          message: 'Orden generada!',
        });
    
         await alert.present();
        location.href = '/consumidor/tab-inicial/ordenes';
         localStorage.removeItem('products')

      },
      response => {
        console.log(response['error']['warning'][0]['value'])
    },
    () => {
        console.log("The POST observable is now completed.");
    });
    
    } 
    
  }
  deleteProduct(product: ProductCar) {
    this.total = 0;
      this.tabAgricultorasServices.removeItemCar(product);
      this.getCarProducts();
      this.getTotal();
}
}
