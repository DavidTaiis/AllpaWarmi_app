import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LiderezaService } from 'src/app/services/ma_lidereza/lidereza.service';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  localizacion:any;
  puntoSelect:any;
  type:any = "Asociacion";
  description:any = "";
  rules:any = "";
  name:any = "";
  advantages:any = "";
  constructor(private liderezaService:LiderezaService, private alertController: AlertController,private navCtrl: NavController) { }

  ngOnInit() {
    this.localizacion = true;
  }
  ngAfterViewInit(){
 
  }

  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }

  guardarAsociacion(){
  const formData = new FormData();
  formData.append('name',this.name);
  formData.append('advantages', this.advantages);
  formData.append('rules', this.rules);
  formData.append('lat',this.puntoSelect.lat);
  formData.append('lng',this.puntoSelect.lng);
  this.liderezaService.updateAsociation(formData).subscribe(res => {
    location.href= '/ma_lideresa/menu/inicio';
  })
  }
}
