import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcopiadoraService {
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': '*/*' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
  };
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  addAcopio(data:FormData){
    return this.httpClient.post(`${this.url}acopio/addAcopio`,data, this.httpOptions)
  }
  getAcopios(){
    return this.httpClient.get(`${this.url}acopio/getAcopios`, this.httpOptions)
  }
  getAcopio(){
    return this.httpClient.get(`${this.url}acopio/getAcopioId`, this.httpOptions)

  }
}
