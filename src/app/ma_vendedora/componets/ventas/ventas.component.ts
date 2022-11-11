import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';
declare var cordova: any;

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  orders: any;
  reports: any;
  start: any;
  finish: any;
  constructor(private sellerServices: TabTransporteService,private alertController: AlertController) {
    this.getOrders();
  }

  ngOnInit() {}

  getOrders() {
    this.sellerServices.getOrdersBySeller().subscribe((res) => {
      this.orders = res;
    });
  }

  getReport() {
 
    this.sellerServices.getReport(this.start, this.finish).subscribe((res) => {
      this.reports = res;
    });
  }
  async createPdf() {
    let first = new Date(this.start);
    let second = new Date(this.finish);
    if(second < first){
      const alert = await this.alertController.create({
        cssClass: 'app-alert',
        header: 'Error!',
        message: 'La fecha de finalización debe ser mayor a la de inicio',
        buttons: ['OK'],
      });

      await alert.present();
    }
    else{
    
    await this.getReport();
    let productos = '';
    let auxProducts = '';

    setTimeout(() => {
      let options = {
        documentSize: 'A4',
        type: 'share',
      };

      cordova.plugins.pdf
        .fromData(
          `<html><h1>Reporte</h1></html><br>
          <h3>Fecha inicio: ${this.start}</h3>
          <h3>Fecha Fin: ${this.finish}</h3>
          <table style = "width: 100%; border: 1px solid #000;">
          <tr>
          <th style = "width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-spacing: 0;">Orden</th>
          <th style = "width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-spacing: 0;">Fecha</th>
          <th style = "width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-spacing: 0;">Productos</th>
          <th style = "width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-spacing: 0;">Total</th>
          </tr>
          ${this.reports.map(function (key) {
            for (let index = 0; index < key.products.length; index++) {
        
              productos = productos + `<p>${key.products[index].quantity} ${key.products[index].measure} ${key.products[index].product} ${key.products[index].subtotal}</p>`
              auxProducts = productos;
              }
      
              productos = '';

            return `
          <tr>

          <td style = "width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-spacing: 0;">${key.id}</td>
          <td style = "width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-spacing: 0;">${key.deliver_date.slice(0,-8)}</td>

          <td style = "width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-spacing: 0;">${auxProducts}</td>

          <td style = "width: 25%; text-align: left; vertical-align: top; border: 1px solid #000; border-spacing: 0;">${key.total}</td>

          </tr>`;
          })}`,
          options
          +`</table>`)
        .then((stats) => console.log('status', stats));
    }, 1500);
    
  }
  }
}
