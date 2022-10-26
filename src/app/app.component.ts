import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabAgricultorasService } from './services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  users:any;
  name:any;
  phone:any;
  identification_card:any;
  foto:any;
  role:any;
  constructor(private navCtrl: NavController, private consumerService:TabAgricultorasService) {
    this.getUser();
  
  }

  logout(){
    this.navCtrl.navigateForward('/');
    localStorage.clear();
  }


  getUser(){
    this.consumerService.getUser()
    .subscribe(res => {
      this.users = res;
      this.name = res['name'];
      this.phone = res['phone'];
      this.identification_card = res['idetification_card'];
      this.foto = res['photo'][0] ? res['photo'][0]['url'] : "";
      this.role = res['role'];
    })
  }
  goUpdateProfile(){
    location.href = 'update-profile';
  }
  gotoDirecction(){
    switch (this.role) {
      case "Consumidor":
        location.href = '/consumidor/geolocalizacion-domicilio';
        break;
      case "Vendedora":
        location.href = '/ma_vendedora/geolocalizacion-huerto';

      case "Lidereza":
        location.href = '/ma_vendedora/geolocalizacion-huerto';
        break;
      
        case "Acopiadora":
        location.href = '/ma_acopiadora/geolocalizacion';
        break;

        case "Camioneta":
        location.href = 'c_camioneta/geolocalizacion';
        break;

        case "Privado":
          location.href = 'c_privado/geolocalizacion-salida';
          break;
    }
  }

}
