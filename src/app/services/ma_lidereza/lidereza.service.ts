import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiderezaService {
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': '*/*' ,'Authorization': 'Bearer '+localStorage.getItem('accessToken')})
  };
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

getSellerPoints(){
  return this.httpClient.get(`${this.url}geolocation/getSellerPoits`, this.httpOptions)

  }
updateAsociation(data:FormData){
  return this.httpClient.post(`${this.url}lider/updateAssociation`,data, this.httpOptions)
}
getAsociation(){
  return this.httpClient.get(`${this.url}lider/getAssociationById`, this.httpOptions)
}
addInvitation(id:any){
  let data = {
    "id_seller": id
  }
  return this.httpClient.post(`${this.url}lider/addInvitation`,data, this.httpOptions)
}
getInvitations(){

  return this.httpClient.get(`${this.url}lider/getInvitationId`, this.httpOptions)
}
updateStatus(id:any, status:any){
  let data = {
    "id":id,
    "status":status
  }
  return this.httpClient.post(`${this.url}lider/updateStatus`,data, this.httpOptions)

}
}
