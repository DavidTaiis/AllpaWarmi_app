import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
@Component({
  selector: 'app-geolocalizacion-huerto',
  templateUrl: './geolocalizacion-huerto.page.html',
  styleUrls: ['./geolocalizacion-huerto.page.scss'],
})
export class GeolocalizacionHuertoPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  type:any = "Huerto";
  description:any = "";
  days:any="";
  hours:any="";
  constructor(private tabAgricultorasService: TabAgricultorasService,private router:Router,private alertController: AlertController) { }

  ngOnInit() {
    this.localizacion = true;
  }

  continuar(){
    this.tabAgricultorasService.addGeolocalizacionMa(this.puntoSelect.lat, this.puntoSelect.lng, this.type,this.description,this.days,this.hours)
    .subscribe( async (res) => {
      const alert = await this.alertController.create({
        cssClass:'app-alert',
        header: '¡Exito!',
        message: 'Ubicación registrada correctamente!',
        buttons: ['OK'],
      });

       await alert.present();
       this.router.navigate(['/ma_vendedora/geolocalizacion-venta'])

    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }

  
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;

    }
}
