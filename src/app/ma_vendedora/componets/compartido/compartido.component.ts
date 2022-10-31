import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-compartido',
  templateUrl: './compartido.component.html',
  styleUrls: ['./compartido.component.scss'],
})
export class CompartidoComponent implements OnInit {
  shareds:any;
  name:any;
  meeting_point:any;
  hour:any;
  date:any;
  status:any= "ACTIVE";
  constructor(private router: Router, private transServices: TabTransporteService, private alertController: AlertController) { }

  ngOnInit() {
    this.getShared();
  }

  gotoProfile(id){
    this.router.navigate([`/ma_vendedora/menu/transporte/perfil-conductor/${id}`]);
  }

  getShared(){
    this.transServices.getShared()
    .subscribe(  (res) => {
      this.shareds = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }
  addShared(){
    const formdata = new FormData();
    formdata.append('name', this.name);
    formdata.append('meeting_point', this.meeting_point);
    formdata.append('hour', this.hour);
    formdata.append('date', this.date);
    formdata.append('status', this.status)
    this.transServices.addShared(formdata)
    .subscribe( async res => {
      const alert = await this.alertController.create({
        cssClass:'app-alert',
        header: '¡Exito!',
        message: 'Orden generada!',
      });
  
       await alert.present();
      location.href = 'http://localhost:8100/ma_vendedora/menu/transporte';
    })
  }
}
