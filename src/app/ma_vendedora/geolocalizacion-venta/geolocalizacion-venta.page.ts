import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-geolocalizacion-venta',
  templateUrl: './geolocalizacion-venta.page.html',
  styleUrls: ['./geolocalizacion-venta.page.scss'],
})
export class GeolocalizacionVentaPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  type:any = "PuntoVenta";
  description:any = "";
  days:any;
  hours:any;
  horaFin:any;
  horaInicio:any;
  constructor(private tabAgricultorasService: TabAgricultorasService,private router:Router,private alertController: AlertController) { }

  ngOnInit() {
    this.localizacion = true;
  }

  continuar(){
    this.hours = this.horaInicio + '-' + this.horaFin;
    const dias = this.days.toString();
    this.tabAgricultorasService.addGeolocalizacionMa(this.puntoSelect.lat, this.puntoSelect.lng, this.type,this.description, dias, this.hours)
    .subscribe( async (res) => {
      const alert = await this.alertController.create({
        cssClass:'app-alert',
        header: '¡Exito!',
        message: 'Ubicación registrada correctamente!',
        buttons: ['OK'],
      });

       await alert.present();
       this.router.navigate(['/ma_vendedora/menu/inicio'])

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
