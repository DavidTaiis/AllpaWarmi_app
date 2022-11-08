import { Component, Input, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { ModalController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProductCar } from 'src/app/models/ProductsCar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detallescarrito',
  templateUrl: './detallescarrito.component.html',
  styleUrls: ['./detallescarrito.component.scss'],
})
export class DetallescarritoComponent implements OnInit {
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
  phoneNumber:any;

  ionicForm: FormGroup;
  isSubmitted:true;

  @Input() productos:any;

  constructor( public modalController:ModalController, public formBuilder: FormBuilder,private navCtrl: NavController, private tabAgricultorasServices: TabAgricultorasService,private alertController: AlertController) { 
    this.ionicForm = this.formBuilder.group({
      'place_delivery': new FormControl("",[Validators.required]),
      'hour': new FormControl("", [Validators.required]),
      'deliverDate': new FormControl("", Validators.required),
      })
  }

  ngOnInit() {
    this.getCarProducts();
    this.getTotal();
    this.getData();
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
       this.phoneNumber = this.phone.substring(1);

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

  let dateConcat = this.deliverDate.substring(0,10) + ' '+ this.hour+':00';
  let date = new Date(dateConcat);
    date.setHours(date.getHours() - 5);
  if(this.total !== 0.00){
  let idSeller = this.products[0]['farmerId'];
  this.navCtrl.navigateForward(['/consumidor/tab-inicial/ordenes']);
  this.modalController.dismiss();
    this.tabAgricultorasServices.createOrder(idSeller,this.total,this.place_delivery,date,this.data)
      .subscribe( async (res) => {
        const alert = await this.alertController.create({
          cssClass:'app-alert',
          header:'Contacta con la vendedora',
          
          subHeader: 'Para completar tu orden debes contactarte con la vendedora ',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
               
              },
            },
            {
              text: 'Confirmar',
              role: 'confirm',
              handler: () => {
              setTimeout(() => {
                this.goWhatsapp();
              }, 1000);
             
              },
            },
          ],
        });
    
         await alert.present();

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
goWhatsapp(){
  localStorage.removeItem('products')
  location.href = `https://api.whatsapp.com/send?phone=993335589&`
  +'text=Hola soy,%20David%20you%20have%20scheduled%20an%20appointment%20on%20lechuga%20with%20the%20following%20instructions%20&source=&data=';
  
}
}
