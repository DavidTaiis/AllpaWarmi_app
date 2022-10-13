import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
})
export class NotificacionesComponent implements OnInit {
  feature:any;
  modal:any;

  constructor(private tabTransporteServices: TabTransporteService) { }

  ngOnInit() {
    this.getNotifications();
    this.modal = "Notificaciones";
  }

  getNotifications(){
    this.tabTransporteServices.getNotifications()
    .subscribe(  (res) => {
      this.feature = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  
  }

}
