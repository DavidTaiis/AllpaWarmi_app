import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { DetallesordenPage } from '../../modals/detallesorden/detallesorden.page';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.page.html',
  styleUrls: ['./mis-ordenes.page.scss'],
})
export class MisOrdenesPage implements OnInit {
  orders:any;

  constructor(private tabAgricultorasService: TabAgricultorasService,private modalCtrl: ModalController) {
    this.getOrders();
   }

  ngOnInit() {
   
  }

  getOrders(){
    this.tabAgricultorasService.getOrders()
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

  async openDetalils(id){

      const modal = await this.modalCtrl.create({
        component: DetallesordenPage,
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.5,
        cssClass: 'custom-modal',
        componentProps: {
          id: id,
        }
    });
    await modal.present();
    
    }
    
}
