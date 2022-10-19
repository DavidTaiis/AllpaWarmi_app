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
  constructor(private navCtrl: NavController, private consumerService:TabAgricultorasService) {
    
    this.getUser();
  
  }

  logout(){
    this.navCtrl.navigateForward('/');
  }

  getUser(){
    this.consumerService.getUser()
    .subscribe(res => {
      this.users = res;
      this.name = res['name'];
      this.phone = res['phone'];
      this.identification_card = res['idetification_card'];
      this.foto = res['photo'][0]['url'];
     
    })
  }
}
