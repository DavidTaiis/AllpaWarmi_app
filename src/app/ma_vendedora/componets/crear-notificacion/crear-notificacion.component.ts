import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';
@Component({
  selector: 'app-crear-notificacion',
  templateUrl: './crear-notificacion.component.html',
  styleUrls: ['./crear-notificacion.component.scss'],
})
export class CrearNotificacionComponent implements OnInit {
  localizacion:any;
  puntoSelect:any;
  description:any;
  type:any;
  

  constructor(private sellerServices: TabTransporteService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.localizacion = true;
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
    
  }
  addNotification(){
    const formData = new FormData();
    formData.append('type',this.type);
    formData.append('description',this.description);
    formData.append('lat',this.puntoSelect.lat);
    formData.append('lng',this.puntoSelect.lng);
    this.sellerServices.addNotification(formData)
    .subscribe( async res => {
      const alert = await this.alertController.create({
        header: '¡Exito!',
        message: 'Ubicación notificación creada correctamente!',
        buttons: ['OK'],
      });

       await alert.present();
       this.type = "";
       this.description = "";
    })
  }
}
