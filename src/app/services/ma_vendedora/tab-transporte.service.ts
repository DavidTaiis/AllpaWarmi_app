import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabTransporteService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

getBusesLine(){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
  };
  return this.httpClient.get(`${this.url}seller/getBusesLine`, httpOptions)
}

getCamionetas(){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
  };
  return this.httpClient.get(`${this.url}seller/getCamionetas`, httpOptions)
}

getDriverId(id:number){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
  };
  return this.httpClient.get(`${this.url}user/getFarmer/${id}`, httpOptions)
}

}
