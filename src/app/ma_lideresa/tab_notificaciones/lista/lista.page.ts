import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { LiderezaService } from 'src/app/services/ma_lidereza/lidereza.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  invitations:any;
  nameSeller:any;
  phoneSeller:any;
  rules:any;
  advantajes:any;
  nameAsociation:any;
  constructor(private tabAgricultorasService:TabAgricultorasService, private lideresaService : LiderezaService, public alertController: AlertController) { }

  ngOnInit() {
    this.getInvitations();
    this.getUser();
    this.getAsociation();
  }
getInvitations(){
  this.lideresaService.getInvitations().subscribe( res => {
    this.invitations = res;
  })
}
async updateStatus(id:any, status:any){

  const alert = await this.alertController.create({
    cssClass: 'app-alert',
    header: '¡Mensaje!',

    subHeader:
      '¿Deseas actualizar la invitación a "Aceptada"?',
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
          this.lideresaService.updateStatus(id, status).subscribe( res => {
            this.ngOnInit();
          })
        },
      },
    ],
  });

  await alert.present();
  

}
goWhatsApp(phoneNumber){
  location.href =
  `https://api.whatsapp.com/send?phone=${phoneNumber.substring(1)}&` +
  'text=Hola%20soy,%20' +
  `${this.nameSeller}` +
  ' te invito a formar parte de mi asociación%20'+
  `${this.nameAsociation}`+
  '%0AVentajas:%0A'+
  `${this.advantajes}`+
  '%0AReglas:%0A'+
  `${this.rules}` +
  '&source=&data=';

}

getUser() {
  this.tabAgricultorasService.getUser().subscribe((res) => {
    this.nameSeller = res['name'];
    this.phoneSeller = res['phone'];
  });
}
getAsociation(){
  this.lideresaService.getAsociation().subscribe(res => {
    this.nameAsociation = res[0]['name'];
    this.rules = res[0]['rules'],
    this.advantajes = res[0]['advantages']
  })
}
}
