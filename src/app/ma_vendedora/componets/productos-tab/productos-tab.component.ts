import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';
@Component({
  selector: 'app-productos-tab',
  templateUrl: './productos-tab.component.html',
  styleUrls: ['./productos-tab.component.scss'],
})
export class ProductosTabComponent implements OnInit {
  
  products : any;

  constructor(private tabTransporteServices: TabTransporteService) { }

  ngOnInit() {
    this.getProductsAuth();
  }


  getProductsAuth(){
    this.tabTransporteServices.getProductsAuth()
    .subscribe(  (res) => {
      this.products = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  
  
  }
}
