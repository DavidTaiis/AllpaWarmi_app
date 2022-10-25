import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfilma',
  templateUrl: './perfilma.page.html',
  styleUrls: ['./perfilma.page.scss'],
})
export class PerfilmaPage implements OnInit {
  id:any;
  farmer:any;
  name: any;
  phone:any;
  feature:any;
  foto:any;
  products:any;
  identification_card:any;

  constructor(private alertController: AlertController,private activatedRoute: ActivatedRoute, private tabAgricultorasService: TabAgricultorasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getFarmerId();
    this.getProductsId(this.id);
  }
  

  getFarmerId(){
    this.tabAgricultorasService.getFarmerId(this.id)
   .subscribe(  (res) => {
   this.farmer = res;
   this.name = res['name'];
     this.phone = res['phone'];
     this.identification_card = res['idetification_card'];
     this.foto = res['photo'][0] ? res['photo'][0]['url'] : "";
   
 },
 response => {
   console.log(response['error']['warning'][0]['value'])
},
() => {
   console.log("The POST observable is now completed.");
});
 }
 getProductsId(idFarmer:number){

  this.tabAgricultorasService.getProductsId(idFarmer)
  .subscribe(  (res) => {
   this.products = res;
   console.log(this.products)
  },
  response => {
    console.log(response['error']['warning'][0]['value'])
},
() => {
    console.log("The POST observable is now completed.");
});
}

async sendInvitation() {
  const alert = await this.alertController.create({
    cssClass:'app-alert',
    header:'¿Enviar invitación?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
         
        },
      },
      {
        text: 'Confirmar',
        role: 'confirm',
        handler: () => {
        console.log('invitacion enviada')
        },
      },
    ],
  });

  await alert.present();
}
}
