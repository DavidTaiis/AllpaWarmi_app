import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service'; 
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  feature:any;
  modal:any;
  constructor( private transServices: TabTransporteService) { }

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
