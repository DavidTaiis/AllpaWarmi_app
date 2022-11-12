import { Component, OnInit } from '@angular/core';
import { CamionetaService } from 'src/app/services/c_camioneta/camioneta.service';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
})
export class NotificacionesComponent implements OnInit {

  servicesDriver:any;

  constructor(public camionetaServie: CamionetaService) { }

  ngOnInit() {
    this.getServiceDriver();
  }

  getServiceDriver(){
    this.camionetaServie.getServiceDriver().subscribe( res => {
      this.servicesDriver = res;
    })
  }
  goWhatsApp(phoneNumber){
    location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola, ¿Solicitaste el servicio de camioneta?&source=&data=;`
  }
}
