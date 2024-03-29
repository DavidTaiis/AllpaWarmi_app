import { Component, Input, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { ModalController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProductCar } from 'src/app/models/ProductsCar';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallescarrito',
  templateUrl: './detallescarrito.component.html',
  styleUrls: ['./detallescarrito.component.scss'],
})
export class DetallescarritoComponent implements OnInit {
  id: any;
  farmer: any;
  name: any;
  phone: any;
  products: any;
  place_delivery: any;
  deliverDate: any = '';
  total: any = '';
  hour: any;
  data: any = [];
  phoneNumber: any;
  device_token:any;
  isUpdated:any;
  ionicForm: FormGroup;
  isSubmitted: true;
  date:any;
  farmerId:any;
  nameClient:any;
  @Input() productos: any;

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
    private tabAgricultorasServices: TabAgricultorasService,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.ionicForm = this.formBuilder.group({
      place_delivery: new FormControl('', [Validators.required]),
      hour: new FormControl('', [Validators.required]),
      deliverDate: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getCarProducts();
    this.getTotal();
    this.getData();
    this.getUser();
    if(this.isUpdated == 1){
      this.updateCarrito(); 
    this.isUpdated = 2;

    }
   
   
  
  }

  async getCarProducts() {
    if (localStorage.getItem('products')) {
      this.products = JSON.parse(localStorage.getItem('products'));
    } else {
      this.products = [
        {
          farmer: 'No hay ninguna',
          farmerId: '0',
          id: 0,
          measure: 'Na',
          price: '0.00',
        },
      ];
    }
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  async getData() {
    if (localStorage.getItem('products')) {
      let productos = JSON.parse(localStorage.getItem('products'));
      for (let index = 0; index < productos.length; index++) {
        let auxData = {
          id: productos[index]['id'],
          subtotal: productos[index]['subtotal'],
          quantity: productos[index]['quantity'],
        };
        this.data = this.data.concat(auxData);
        this.farmer = productos[index]['farmer'];
        this.phone = productos[index]['phone'];
        this.phoneNumber = this.phone.substring(1);
        this.farmerId = productos[index]['farmerId']
      }
      this.tabAgricultorasServices.getFarmerId(this.farmerId).subscribe( res => {
        this.device_token = res['device_token']
      })
    }
  }

  getTotal() {
    if (localStorage.getItem('products')) {
      let productos = JSON.parse(localStorage.getItem('products'));
      for (let index = 0; index < productos.length; index++) {
        this.total = Number(this.total) + Number(productos[index]['subtotal']);
      }
    } else {
      this.total = 0.0;
    }
  }

  async createOrder() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      let dateConcat =
        this.deliverDate.substring(0, 10) + ' ' + this.hour + ':00';
      let date = new Date(dateConcat);
      date.setHours(date.getHours() - 5);
      if (this.total !== 0.0) {
        let idSeller = this.products[0]['farmerId'];
        this.navCtrl.navigateForward(['/consumidor/tab-inicial/ordenes']);
        this.modalController.dismiss();
        this.tabAgricultorasServices
          .createOrder(
            idSeller,
            this.total,
            this.place_delivery,
            date,
            this.data
          ).subscribe( res => {
           this.sendNotification();

           setTimeout(() => {
            this.goWhatsapp();
            
           }, 2000);
          })
      }
    }
  }
  deleteProduct(product: ProductCar) {
    this.total = 0;
    this.tabAgricultorasServices.removeItemCar(product);
    this.getCarProducts();
    this.getTotal();
  }
  goWhatsapp() {
    localStorage.removeItem('products');
    let dateConcat =
    this.deliverDate.substring(0, 10) + ' ' + this.hour;
    location.href =
    `https://api.whatsapp.com/send?phone=593${this.phoneNumber}&` +
    'text=Hola,%20soy%20' +
    `${this.nameClient}` +
    ' por favor ayúdame con estos productos: 🥬 🥬%20'+
    `${this.productos.map(item => {
      return `%0A${item.quantity} ${item.measure} ${item.productName}` })}`+
    '%0AEn esta fecha y hora:%0A'+
    `${dateConcat}`+
    '%0APunto de recogida:%0A'+
    `${this.place_delivery}` +
    '&source=&data=';
  }

  sendNotification(){
    let title = "Nuevo pedido";
    let message = `Hola soy, ${this.nameClient} por favor ayúdame con estos productos: 🥬 🥬:`
    this.tabAgricultorasServices.sendNotification(message, title, this.device_token).subscribe(res => {
      console.log("enviada")
    })
  }

  async confirmarOrden(){
    const alert = await this.alertController.create({
      cssClass: 'app-alert',
      header: 'Contacta',

      subHeader:
        'Para completar tu orden debes contactarte con la vendedora ',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: async () => {
          this.createOrder();
          },
        },
      ],
    });

    await alert.present();
  }
  getUser() {
    this.tabAgricultorasServices.getUser().subscribe((res) => {
      this.nameClient = res['name'];
        });
  }
  updateCarrito(){   
    this.isUpdated = 1;
    this.router.navigate(['/consumidor/tab-inicial/carrito',2])     
 
  this.ngOnInit();
  }

}
