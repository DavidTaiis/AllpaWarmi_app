import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { ModalController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProductCar } from 'src/app/models/ProductsCar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  
  productos:any;
  constructor() {
 
    
  }
 ngOnInit() {
  this.getdata();
  }
getdata(){
  this.productos = JSON.parse( localStorage.getItem('products'));
}
}
