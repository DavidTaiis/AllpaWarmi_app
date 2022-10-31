import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service'; 

@Component({
  selector: 'app-tab-inicio',
  templateUrl: './tab-inicio.page.html',
  styleUrls: ['./tab-inicio.page.scss'],
})
export class TabInicioPage implements OnInit {
  feature:any;
  modal:any;
  fecha = new Date().toLocaleDateString();
  constructor( private transServices: TabTransporteService) { }

  ngOnInit() {
    this.getNews();
    this.modal = "Noticias";
  }

  getNews(){
    this.transServices.getNews()
    .subscribe(  (res) => {
      this.feature = res;
      console.log(this.feature)
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  
  }

}
