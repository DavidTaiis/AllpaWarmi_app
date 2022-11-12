import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CamionetaService } from 'src/app/services/c_camioneta/camioneta.service';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
})
export class NotificacionesComponent implements OnInit {

  servicesDriver:any;

  constructor(public camionetaServie: CamionetaService, public alertController: AlertController) { }

  ngOnInit() {
    this.getServiceDriver();
  }

  getServiceDriver(){
    this.camionetaServie.getServiceDriver().subscribe( res => {
      this.servicesDriver = res;
    })
  }
  goWhatsApp(phoneNumber){
    location.href = `https://api.whatsapp.com/send?phone=${phoneNumber.substring(1)}&text=Hola, ¿Solicitaste el servicio de camioneta?&source=&data=;`
  }
  async updateStatus(id:any){
    const alert = await this.alertController.create({
      cssClass: 'app-alert',
      header: '¡Mensaje!',

      subHeader:
        '¿Deseas completar el servicio?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: async () => {
            this.camionetaServie.updateStatus(id).subscribe(async res => {
              this.ngOnInit();
            })
          },
        },
      ],
    });

    await alert.present();
    
  }
}
