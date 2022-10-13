import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { ProductCar } from 'src/app/models/ProductsCar';

@Injectable({
  providedIn: 'root'
})
export class TabAgricultorasService {
  
  url = environment.apiUrl;
  arrayProdsCar :ProductCar[];
   httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'Application/json',
      'Authorization': 'Bearer '+localStorage.getItem('accessToken') })
  };

  constructor(private location: Location,private router: Router,private navCtrl: NavController,private httpClient: HttpClient) { }

getFarmers(){
 
  return this.httpClient.get(`${this.url}consumer/get-farmers`, this.httpOptions)
  }

  getFarmerId(id:number){

    return this.httpClient.get(`${this.url}user/getFarmer/${id}`, this.httpOptions)
  }
  getProductsId(id:number){

    return this.httpClient.get(`${this.url}consumer/get-products/${id}`, this.httpOptions)
  }
  getProductId(id:number){
    return this.httpClient.get(`${this.url}consumer/get-product/${id}`, this.httpOptions)
  }
   
   getCart(){

    this.arrayProdsCar = JSON.parse(localStorage.getItem('products')) ?? "";
    return this.arrayProdsCar;
  

 }
  addProduct(productCar:ProductCar){
    
    let arrayProds = JSON.parse(localStorage.getItem('products')) ?? "";
    if(!arrayProds){
      localStorage.setItem('products',JSON.stringify(productCar))
          this.location.back();

    }else{
      if(arrayProds.farmerId === productCar.farmerId){
    Array.prototype.push.apply(arrayProds,productCar);
    localStorage.setItem('products',JSON.stringify(arrayProds));
    this.location.back();

  }
  else{
    alert("Solo puedes hacer compras de una sola vendedora")
  }
  }
    
  }
  removeCart(){
    localStorage.setItem('products', "");
  }

  getGeolocalizacionMa(){ 
    return this.httpClient.get(`${this.url}geolocation/getGeolocationFarmers`, this.httpOptions)
    
  }

  addGeolocalizacionMa(lat:string, lng:string, type:string, description:string){
    let datos = {
      'lat': lat,
      'lng': lng,
      'type': type,
      'description':description

    };
      return this.httpClient.post(`${this.url}geolocation/addGeolocation`,datos, this.httpOptions)

  }
  getGeolocationMaId(id:number){
    return this.httpClient.get(`${this.url}geolocation/getGeolocationFarmerId/${id}`, this.httpOptions)
  }

  createOrder(idSeller:number, total:any, deliveryDate:any, products:any){
    let datos ={
      'id_seller' : idSeller,
      'total' : total,
      'deliver_date' : deliveryDate,
      'products' : products
    };
    console.log(JSON.stringify(datos));
    return this.httpClient.post(`${this.url}consumer/createOrder`,datos, this.httpOptions)

  }

  getOrders(){
    return this.httpClient.get(`${this.url}consumer/getOrdersByConsumerId`, this.httpOptions)
  }
}
