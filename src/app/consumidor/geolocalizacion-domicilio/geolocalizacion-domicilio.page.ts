import { Component, OnInit, ViewChild } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { ActivatedRoute } from '@angular/router';

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
  days:any = "";
  hours:any = "";
  pointsGeolocation:any;
  isUpdated:any;
  constructor(private activatedRoute: ActivatedRoute,public loginService: LoginServiceService ,private tabAgricultorasService: TabAgricultorasService,private navCtrl: NavController,private alertController: AlertController) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.isUpdated = params.get('id');

    })
  }

  ngOnInit() {
  
    this.getGeolocation();

    this.localizacion = true;
  }
  ngAfterViewInit() {

  }
  recibirData(positionSet:any){
  this.puntoSelect = positionSet;
  
  }

  guardarGeolocalizacion(){
    this.tabAgricultorasService.addGeolocalizacionMa(this.puntoSelect.lat, this.puntoSelect.lng, this.type,this.description, this.days, this.hours)
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

  getGeolocation(){
   console.log(this.isUpdated)
    if(this.isUpdated > 1){
      this.loginService.getGeolocalizacionAuth().subscribe(res => {
        this.pointsGeolocation = res;
        if(this.pointsGeolocation.length > 0){

          location.href = 'consumidor/tab-inicial/inicio';
        }
          
      })
    } 
    
  }
  
}
