import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabTransporteService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
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
}
