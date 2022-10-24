import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AcopiadoraService } from 'src/app/services/ma_acopiadora/acopiadora.service';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  type:any = "Asociacion";
  name:any;
  description:any;
  days:any;
  horaFin:any;
  horaInicio:any;

  constructor(private navCtrl: NavController, private acopioService: AcopiadoraService, private alertController: AlertController) { }

  ngOnInit() {
    this.localizacion = true;
  }
 
  continuar(){
    this.navCtrl.navigateForward("/ma_acopiadora/menu/inicio")
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }
  addAcopio(){
    const hora = this.days.toString();
    const formData = new FormData();
    formData.append('name',this.name);
    formData.append('description', this.description);
    formData.append('days', hora);
    formData.append('lat',this.puntoSelect.lat);
    formData.append('lng',this.puntoSelect.lng);
    formData.append('hours',this.horaInicio + '-' + this.horaFin);
    console.log(this.horaInicio + '-' + this.horaFin)
    this.acopioService.addAcopio(formData).subscribe( async res => {
      
      const alert = await this.alertController.create({
        header: '¡Exito!',
        message: 'Centro de acopio guardado!',
      });
  
       await alert.present();
       setTimeout(() => {
        location.href= '/ma_acopiadora/menu/inicio';
       }, 1000);
   
    })
  }
}
