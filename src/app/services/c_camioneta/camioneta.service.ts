import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CamionetaService {
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': '*/*' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
  };
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  addCamioneta(data:FormData){
    return this.httpClient.post(`${this.url}camioneta/addCamioneta`,data, this.httpOptions)
  }

  getServiceDriver(){
    return this.httpClient.get(`${this.url}camioneta/getServiceDriverId`, this.httpOptions)
  }

}

