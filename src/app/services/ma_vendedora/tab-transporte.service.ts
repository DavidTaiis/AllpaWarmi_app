import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabTransporteService {
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': '*/*' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
  };
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

getBusesLine(){

  return this.httpClient.get(`${this.url}seller/getBusesLine`, this.httpOptions)
}

getCamionetas(){

  return this.httpClient.get(`${this.url}seller/getCamionetas`, this.httpOptions)
}

getDriverId(id:number){
  return this.httpClient.get(`${this.url}user/getFarmer/${id}`, this.httpOptions)
}
getCamionetaId(id:number){
  return this.httpClient.get(`${this.url}seller/getCamionetaId/${id}`, this.httpOptions)
}
getShared(){
  return this.httpClient.get(`${this.url}seller/getShared`, this.httpOptions)
}
getNews(){
  return this.httpClient.get(`${this.url}seller/getNews`, this.httpOptions)
}
getProductsAuth(){
  return this.httpClient.get(`${this.url}seller/getProductsByAuth`, this.httpOptions)
}
getNotifications(){
  return this.httpClient.get(`${this.url}notification/getNotifications`, this.httpOptions)
}
getOrdersBySeller(){
  return this.httpClient.get(`${this.url}seller/getOrdersBySeller`, this.httpOptions)
}
updateOrder(orderId:number){
  let datos ={
    'id' : orderId,
    'status' : "Completada",
  };
  return this.httpClient.post(`${this.url}seller/updateStatus`,datos, this.httpOptions)

}
addProduct(formdata:FormData){
  return this.httpClient.post(`${this.url}seller/addProduct`,formdata, this.httpOptions)

}
getMeasures(){

  return this.httpClient.get(`${this.url}seller/getMeasures`, this.httpOptions)
}
updateProduct(formdata:FormData){
  return this.httpClient.post(`${this.url}seller/updateProduct`,formdata, this.httpOptions)

}
deleteProduct(id:any){
  return this.httpClient.get(`${this.url}seller/deleteProduct/${id}`, this.httpOptions)
}
addNotification(formdata:FormData){
  return this.httpClient.post(`${this.url}notification/addNotification`,formdata, this.httpOptions)
}
addShared(formdata:FormData){
  return this.httpClient.post(`${this.url}seller/addShared`,formdata, this.httpOptions)

}
getComercio(){

  return this.httpClient.get(`${this.url}seller/getComercios`, this.httpOptions)
}
}
