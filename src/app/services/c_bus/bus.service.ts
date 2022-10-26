import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': '*/*' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
  };
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getParadas(){
    return this.httpClient.get(`${this.url}lineBus/stops`, this.httpOptions)
  }
}
