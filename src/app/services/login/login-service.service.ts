import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  autentification(cedula:string, contrasena:string, role:string){

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
    };
    let datos = {
      "identification_card": cedula,
      "password": contrasena,
      "role" : role
    };
   return this.httpClient.post(`${this.url}auth/login`,datos, httpOptions)
  }

  register(name:string, identification_card:string, phone_number:string, role:any, password:string, is_association:string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
    };
    let datos = {
      "name" : name,
      "identification_card": identification_card,
      "phone_number": phone_number,
      "role": role,
      "password": password,
      "is_association": is_association
    };
    return this.httpClient.post(`${this.url}user/register`,datos, httpOptions)
  }

  getUser(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'Application/json' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')},
      )
    };
    return this.httpClient.get(`${this.url}user/getUser`, httpOptions);
  }
  updateProfile(formdata: FormData){
   const httpOptions = {
      headers: new HttpHeaders({ 'Accept': '*/*' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
    };
    return this.httpClient.post(`${this.url}user/updateProfileUser`,formdata, httpOptions);
  }
  getGeolocalizacionAuth(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': '*/*' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
    };
    return this.httpClient.get(`${this.url}geolocation/getGeolocationFarmerAuth`, httpOptions);
  
  }
}
