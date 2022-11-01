import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivadoService {
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': '*/*' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
  };
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {
   
   }
   addPrivado(car_plate:string, description:string, color:string, nameRoute:string, descriptionRoute:string, lat:string, lng:string, type:string
    ){
    let data = {
      'car_plate': car_plate,
      'description': description,
      'color': color,
      'nameRoute': nameRoute,
      'descriptionRoute': descriptionRoute,
      'geolocation': [{
        'lat': lat,
        'lng': lng,
        'type': type
      }]
    }
    console.log(data)
    return this.httpClient.post(`${this.url}camioneta/addRoutePrivate`,data, this.httpOptions)
  }
}
