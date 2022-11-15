import { Component, OnInit} from '@angular/core';
import { FormGroup,  FormControl, FormBuilder, Validators } from '@angular/forms';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil-ma',
  templateUrl: './perfil-ma.page.html',
  styleUrls: ['./perfil-ma.page.scss'],
})
export class PerfilMAPage implements OnInit {
  buscador:any;
  miUbicacion:any;
  id:any;
  farmer:any;
  name: any;
  phone:any;
  feature:any;
  foto:any;
  identification_card:any;
  phoneNumber:any;
  public form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,public fb: FormBuilder,private tabAgricultorasService: TabAgricultorasService) { 
    this.form = this.fb.group({
      'rating': new FormControl([5])
    });
   
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getFarmerId();
    this.getGeolocationMaId();
    this.buscador = true;
    this.miUbicacion=true;
  }
  getFarmerId(){
    this.tabAgricultorasService.getFarmerId(this.id)
   .subscribe(  (res) => {
   this.farmer = res;
   this.name = res['name'];
     this.phone = res['phone'];
     this.identification_card = res['idetification_card'];
     this.foto = res['photo'][0] ? res['photo'][0]['url'] : "";
     this.phoneNumber = this.phone.substring(1);
 },
 response => {
   console.log(response['error']['warning'][0]['value'])
},
() => {
   console.log("The POST observable is now completed.");
});
 }
 getGeolocationMaId(){
   this.tabAgricultorasService.getGeolocationMaId(this.id)
   .subscribe(  (res) => {
   this.feature = res;
   },
   response => {
     console.log(response['error']['warning'][0]['value'])
 },
 () => {
     console.log("The POST observable is now completed.");
 });
   }
}
