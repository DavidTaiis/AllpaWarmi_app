import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.scss'],
})
export class EntregasComponent implements OnInit {
  orders:any;
  constructor(private router:Router, private tabTransporteServices: TabTransporteService, private alertController: AlertController) { }

  ngOnInit() {
    this.getOrdersBySeller();
  }


  getOrdersBySeller(){
    this.tabTransporteServices.getOrdersBySeller()
    .subscribe(  (res) => {
      this.orders = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }

  async updateStatus(orderId:any) {
    console.log(orderId)
    const alert = await this.alertController.create({
      header: '¿Deseas completar la venta?',
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
            this.tabTransporteServices.updateOrder(orderId)
            .subscribe(  (res) => {
        
           },
            response => {
              console.log(response['error']['warning'][0]['value'])
          },
          () => {
              console.log("The POST observable is now completed.");
          });
          this.getOrdersBySeller();
          },
        },
      ],
    });

    await alert.present();

  }
  viewDetails(){
    this.router.navigate(['/detalles-venta']);
  }
}
