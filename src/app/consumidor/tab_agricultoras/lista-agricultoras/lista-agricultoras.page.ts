import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
@Component({
  selector: 'app-lista-agricultoras',
  templateUrl: './lista-agricultoras.page.html',
  styleUrls: ['./lista-agricultoras.page.scss'],
})
export class ListaAgricultorasPage implements OnInit {
  listFarmers:any;
  constructor(private tabAgricultorasServices: TabAgricultorasService ) { }

  ngOnInit() {
    this.getFarmers();
  }

   getFarmers(){
    this.tabAgricultorasServices.getFarmers()
    .subscribe(  (res) => {
      this.listFarmers = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }
 
}
