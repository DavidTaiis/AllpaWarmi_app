import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';



@Component({
  selector: 'app-productos-tab',
  templateUrl: './productos-tab.component.html',
  styleUrls: ['./productos-tab.component.scss'],
})
export class ProductosTabComponent implements OnInit {
  
  products : any;
  id:any=0;
 
  total:any ;

  constructor(private tabTransporteServices: TabTransporteService, private router:Router) { 
    this.getProductsAuth();
  }

  ngOnInit() {
   
  }


  getProductsAuth(){
    this.tabTransporteServices.getProductsAuth()
    .subscribe(  (res) => {
      this.products = res;
      console.log(this.products)
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  
  }

  viewAgregarProducto(){
    this.router.navigate([`ma_vendedora/menu/productos/agregarProducto/${this.id}`])
  }




}
