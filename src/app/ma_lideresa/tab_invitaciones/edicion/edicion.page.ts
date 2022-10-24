import { Component, OnInit } from '@angular/core';
import { LiderezaService } from 'src/app/services/ma_lidereza/lidereza.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.page.html',
  styleUrls: ['./edicion.page.scss'],
})
export class EdicionPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  name:any;
  advantages:any;
  rules:any;
  posicionEdit:any;
  constructor(private liderezaService: LiderezaService,private alertController: AlertController) { }

  ngOnInit() {
    this.localizacion = true;
    this.getASociation();
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }

  async addAsociation(){
    const alert = await this.alertController.create({
      header:'¿Editar asociación?',
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
          this.guardarAsociacion();
          },
        },
      ],
    });
  
    await alert.present();
    
  }

  getASociation(){
    this.liderezaService.getAsociation().subscribe(res => {
      this.name = res[0]['name'],
      this.advantages = res[0]['advantages'],
      this.rules = res[0]['rules']
      this.posicionEdit = {  
        lat: Number(res[0]['lat']), 
        lng: Number(res[0]['lng'])
  };
    })
  }

  guardarAsociacion(){
    const formData = new FormData();
    formData.append('name',this.name);
    formData.append('advantages', this.advantages);
    formData.append('rules', this.rules);
    formData.append('lat',this.puntoSelect.lat);
    formData.append('lng',this.puntoSelect.lng);
    this.liderezaService.updateAsociation(formData).subscribe(res => {
      location.href= '/ma_lideresa/menu/invitacion';
    })
    }
 
}
