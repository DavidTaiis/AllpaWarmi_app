import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-modal-privado',
  templateUrl: './modal-privado.page.html',
  styleUrls: ['./modal-privado.page.scss'],
})
export class ModalPrivadoPage implements OnInit {
  @Input() car_plate: any;
  @Input() identification_card: any;
  @Input() color: any;
  @Input() description: any;
  @Input() user_name: any;
  @Input() phone_number: any;
  @Input() id_user:any;

  id: any;
  driver: any;
  phone: any;
  type: any;
  image: any;
  nameSeller:any;
  phoneSeller:any;
  date:any =new Date().toLocaleDateString();

  constructor(
    private alertController: AlertController,
    private tabTransporteService: TabTransporteService,
    private consumerService: TabAgricultorasService
  ) {}

  ngOnInit() {

    this.getUser();
  }
  contactWhatsApp() {
    this.tabTransporteService
      .addServiceDriver(this.id_user, this.date)
      .subscribe((res) => {
        location.href =
          `https://api.whatsapp.com/send?phone=${this.phone_number.substring(1)}&` +
          'text=Hola%20soy,%20' +
          `${this.nameSeller}` +
          ' por favor, necesito de su servicio de camioneta%20&source=&data=';
      });
  }

  getUser() {
    this.consumerService.getUser().subscribe((res) => {
      this.nameSeller = res['name'];
      this.phoneSeller = res['phone'];
    });
  }

  async confirmWhatsApp() {
    const alert = await this.alertController.create({
      cssClass: 'app-alert',
      header: '¿Deseas realizar esta solocitud?',

      subHeader:
        'Para finalizar el proceso, establece una conversación con el conductor',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.contactWhatsApp();
          },
        },
      ],
    });

    await alert.present();
  }
}
