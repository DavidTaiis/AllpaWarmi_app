import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,  FormControl, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-perfil-ma',
  templateUrl: './perfil-ma.page.html',
  styleUrls: ['./perfil-ma.page.scss'],
})
export class PerfilMaPage implements OnInit {

  buscador:any;
  miUbicacion:any;

  id:any;
  farmer:any;
  name: any;
  phone:any;
  feature:any;

  
  public form: FormGroup;

  constructor(public fb: FormBuilder, private activatedRoute: ActivatedRoute, private tabAgricultorasService: TabAgricultorasService) {
 
    this.form = this.fb.group({
      'rating': new FormControl([3])
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
    this.phone = res['phone']
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
