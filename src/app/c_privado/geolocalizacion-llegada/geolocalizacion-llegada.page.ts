import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PrivadoService } from 'src/app/services/c_privado/privado.service';
@Component({
  selector: 'app-geolocalizacion-llegada',
  templateUrl: './geolocalizacion-llegada.page.html',
  styleUrls: ['./geolocalizacion-llegada.page.scss'],
})
export class GeolocalizacionLlegadaPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  car_plate:any;
  description:any;
  color:any;
  nameRoute:any;
  descriptionRoute:any;
  lat:any;
  lng:any;
  type:any;
  ionicForm: FormGroup;
  isSubmitted:true;

  constructor(public formBuilder: FormBuilder, private router:Router, private modal:ModalController,private privado: PrivadoService) {
    this.ionicForm = this.formBuilder.group({
      'color': new FormControl("",[Validators.required]),
      'car_plate': new FormControl("", [Validators.required]),
      'description': new FormControl("", Validators.required),
      })
   }

  ngOnInit() {
    this.localizacion = true;
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  registrarLlegada(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {

    this.lat = this.puntoSelect.lat;
    this.lng = this.puntoSelect.lng;
    this.nameRoute = "";
    this.descriptionRoute = "";
    this.type = "Fin";

    this.privado.addPrivado(this.car_plate,
      this.description,
      this.color,
      this.nameRoute,
      this.descriptionRoute,
      this.lat,
      this.lng,
      this.type).subscribe( res => {

    })
    this.router.navigate(['/c_privado/menu/inicio']);
    this.modal.dismiss();
  }
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }

}
