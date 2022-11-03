import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { Router } from '@angular/router';
import { CamionetaService } from 'src/app/services/c_camioneta/camioneta.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  car_plate:any;
  description:any;
  type:any;
  color:any;

  ionicForm: FormGroup;
  isSubmitted:true;
  constructor(public formBuilder: FormBuilder,public Mapa:MapasService, private router:Router, private camionetaService: CamionetaService) {
    this.ionicForm = this.formBuilder.group({
      'color': new FormControl("",[Validators.required]),
      'car_plate': new FormControl("", [Validators.required]),
      'description': new FormControl("", Validators.required),
      })
   }

  
  ngOnInit() {
    this.localizacion = true;
    this.type = "Camioneta";
  }

  registrarParada(){
    this.router.navigate(['/c_camioneta/menu/inicio']);
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }

  guardarCamioneta(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {


    const formData = new FormData();
    formData.append('car_plate',this.car_plate);
    formData.append('description', this.description);
    formData.append('type', this.type);
    formData.append('color', this.color);
    formData.append('lat',this.puntoSelect.lat);
    formData.append('lng',this.puntoSelect.lng);
    this.camionetaService.addCamioneta(formData).subscribe( res => {
   location.href = '/c_camioneta/menu/inicio';
    })
    }
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  
}
