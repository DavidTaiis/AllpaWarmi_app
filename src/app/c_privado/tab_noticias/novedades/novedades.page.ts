import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service'; 

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {
  feature:any;
  modal:any;
  fecha = new Date().toLocaleDateString();

  constructor(private transServices: TabTransporteService) { }

  ngOnInit() {
    this.getNews();
    this.modal = "Noticias";
  }
  getNews(){
    this.transServices.getNews()
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
