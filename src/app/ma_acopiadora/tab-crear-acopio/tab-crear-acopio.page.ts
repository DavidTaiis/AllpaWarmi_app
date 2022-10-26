import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AcopiadoraService } from 'src/app/services/ma_acopiadora/acopiadora.service';

@Component({
  selector: 'app-tab-crear-acopio',
  templateUrl: './tab-crear-acopio.page.html',
  styleUrls: ['./tab-crear-acopio.page.scss'],
})
export class TabCrearAcopioPage implements OnInit {
  localizacion:any;
  puntoSelect:any;
  name:any;
  days:any;
  hours:any;
  description:any;
  posicionEdit:any;
  horaInicio:any;
  horaFin:any;

  constructor(private alertController: AlertController, private acopiadoraService: AcopiadoraService) { }

  ngOnInit() {
    this.localizacion = true;
    this.getAcopio();
  }
  async addAsociation(){
    const alert = await this.alertController.create({
      cssClass:'app-alert',
      header:'¿Editar centro de acopio?',
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
          this.guardarAcopio();
          },
        },
      ],
    });
  
    await alert.present();
    
  }
  guardarAcopio(){
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('lat', this.puntoSelect.lat);
    formData.append('lng', this.puntoSelect.lng);
    formData.append('days', this.days);
    formData.append('hours', this.horaInicio + ' - ' +this.horaFin);
    this.acopiadoraService.addAcopio(formData).subscribe( res => {
      location.href= '/ma_acopiadora/menu/inicio';

    })
  }
  recibirData(positionSet:any){
    this.puntoSelect = positionSet;
  }

  getAcopio(){
    let separado;
    this.acopiadoraService.getAcopio().subscribe( res => {
      this.name = res[0]['name'];
      this.description = res[0]['description'];
      this.days = res[0]['days'];
      this.hours = res[0]['hours'];
      separado = this.hours.split('-');
      this.horaInicio = separado[0],
      this.horaFin = separado[1];
      this.posicionEdit = {  
        lat: Number(res[0]['position']['lat']), 
        lng: Number(res[0]['position']['lng'])
  };
    })
  }
}
