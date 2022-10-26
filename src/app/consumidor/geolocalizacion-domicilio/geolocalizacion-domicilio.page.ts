import { Component, OnInit, ViewChild } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion-domicilio',
  templateUrl: './geolocalizacion-domicilio.page.html',
  styleUrls: ['./geolocalizacion-domicilio.page.scss'],
})
export class GeolocalizacionDomicilioPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  type:any = "Consumidor";
  description:any = "";
  constructor(private tabAgricultorasService: TabAgricultorasService,private navCtrl: NavController,private alertController: AlertController) { }

  ngOnInit() {
    this.localizacion = true;

 
  }
  ngAfterViewInit() {

  }
  recibirData(positionSet:any){
  this.puntoSelect = positionSet;
  
  }

  guardarGeolocalizacion(){
    this.tabAgricultorasService.addGeolocalizacionMa(this.puntoSelect.lat, this.puntoSelect.lng, this.type,this.description)
    .subscribe( async (res) => {
      const alert = await this.alertController.create({
        cssClass:'app-alert',
        header: '¡Exito!',
        message: 'Ubicación registrada correctamente!',
        buttons: ['OK'],
      });

       await alert.present();
       this.navCtrl.navigateForward('/consumidor/tab-inicial/inicio');

    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }


}
