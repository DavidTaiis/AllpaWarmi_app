import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabAgricultorasService } from './services/consumidor/tab-agricultoras.service';
import { LoginServiceService } from './services/login/login-service.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  users: any;
  name: any;
  phone: any;
  identification_card: any;
  foto: any;
  role: any = localStorage.getItem('rol');
  constructor(
    private navCtrl: NavController,
    private consumerService: TabAgricultorasService,

  ) {
    this.getUser();
   /*  this.goPage(); */
  }

  logout() {
    this.consumerService.logout().subscribe(res => {
      this.navCtrl.navigateForward('/');

      localStorage.clear();
    })
   
    
  }

  getUser() {
    this.consumerService.getUser().subscribe((res) => {
      this.users = res;
      this.name = res['name'];
      this.phone = res['phone'];
      this.identification_card = res['idetification_card'];
      this.foto = res['photo'][0] ? res['photo'][0]['url'] : '';
    });
  }
  goUpdateProfile() {
    /* this.navCtrl.navigateForward(['update-profile']) */
    location.href = 'update-profile';
  }
  gotoDirecction() {
    switch (this.role) {
      case 'Consumidor':
        location.href = '/consumidor/geolocalizacion-domicilio/1';
        break;
      case 'Vendedora':
        location.href = '/ma_vendedora/geolocalizacion-huerto/1';
        break;
      case 'Lidereza':
        location.href = '/ma_lideresa/geolocalizacion';
        break;

      case 'Acopiadora':
        location.href = '/ma_acopiadora/geolocalizacion';
        break;

      case 'Camioneta':
        location.href = 'c_camioneta/geolocalizacion';
        break;

      case 'Privado':
        location.href = 'c_privado/geolocalizacion-salida';
        break;
    }
  }
  goFavorites(){
    location.href = 'consumidor/tab-inicial/favoritas';
  }

  goPage(){
    switch (this.role) {
      case 'Consumidor':
    
        break;
      case 'Vendedora':
        PushNotifications.addListener('pushNotificationActionPerformed',
        (notification: ActionPerformed) => {
          this.navCtrl.navigateForward(['ma_vendedora/menu/notificaciones'])
        }
      );
        break;
      case 'Lidereza':
   
        break;

      case 'Acopiadora':

        break;

      case 'Camioneta':

        break;

      case 'Privado':
  
        break;
    }

   
  }
}
