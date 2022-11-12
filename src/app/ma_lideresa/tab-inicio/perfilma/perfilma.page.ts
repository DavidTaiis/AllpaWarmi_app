import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { AlertController } from '@ionic/angular';
import { LiderezaService } from 'src/app/services/ma_lidereza/lidereza.service';

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
  nameSeller:any;
  phoneSeller:any;
  rules:any;
  advantajes:any;
  nameAsociation:any;

  constructor( private liderService:LiderezaService, private alertController: AlertController,private activatedRoute: ActivatedRoute, private tabAgricultorasService: TabAgricultorasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getFarmerId();
    this.getProductsId(this.id);
    this.getUser();
    this.getAsociation();
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
          this.addInvitation();
        },
      },
    ],
  });

  await alert.present();
}
getUser() {
  this.tabAgricultorasService.getUser().subscribe((res) => {
    this.nameSeller = res['name'];
    this.phoneSeller = res['phone'];
  });
}
getAsociation(){
  this.liderService.getAsociation().subscribe(res => {
    console.log(res)

    this.nameAsociation = res[0]['name'];
    this.rules = res[0]['rules'],
    this.advantajes = res[0]['advantages']
  })
}
addInvitation(){
  this.liderService.addInvitation(this.id).subscribe(res=> {
    location.href =
    `https://api.whatsapp.com/send?phone=${this.phone.substring(1)}&` +
    'text=Hola%20soy,%20' +
    `${this.nameSeller}` +
    ' te invito a formar parte de mi asociación%20'+
    `${this.nameAsociation}`+
    '%0AVentajas:%0A'+
    `${this.advantajes}`+
    '%0AReglas:%0A'+
    `${this.rules}` +
    '&source=&data=';
  })
}

}
