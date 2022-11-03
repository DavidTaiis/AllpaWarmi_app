import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProductCar } from 'src/app/models/ProductsCar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
  hour:any;
  data:any = [];

  ionicForm: FormGroup;
  isSubmitted:true;

  constructor(public formBuilder: FormBuilder,private navCtrl: NavController, private tabAgricultorasServices: TabAgricultorasService,private alertController: AlertController) {
    
    this.getCarProducts();
    this.getData();
    this.getTotal();
    this.ionicForm = this.formBuilder.group({
      'place_delivery': new FormControl("",[Validators.required]),
      'hour': new FormControl("", [Validators.required]),
      'deliverDate': new FormControl("", Validators.required),
      })
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
  get errorControl() {
    return this.ionicForm.controls;
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
  this.isSubmitted = true;
  if (!this.ionicForm.valid) {
    console.log('Please provide all the required values!')
    return false;
  } else {


  console.log(this.deliverDate.substring(0,10))
  let dateConcat = this.deliverDate.substring(0,10) + ' '+ this.hour+':00';
  let date = new Date(dateConcat);
    date.setHours(date.getHours() - 5);
  if(this.total !== 0.00){
  let idSeller = this.products[0]['farmerId'];
    this.tabAgricultorasServices.createOrder(idSeller,this.total,this.place_delivery,date,this.data)
      .subscribe( async (res) => {
        const alert = await this.alertController.create({
          cssClass:'app-alert',
          header: '¡Exito!',
          message: 'Orden generada!',
        });
    
         await alert.present();
        location.href = '/consumidor/tab-inicial/ordenes';
         localStorage.removeItem('products')

      });
    
    } 
   }
  }
  deleteProduct(product: ProductCar) {
    this.total = 0;
      this.tabAgricultorasServices.removeItemCar(product);
      this.getCarProducts();
      this.getTotal();
}
}
