import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-agricultoras',
  templateUrl: './agricultoras.component.html',
  styleUrls: ['./agricultoras.component.scss'],
})
export class AgricultorasComponent implements OnInit {
  listFarmers:any;
  constructor(private tabAgricultorasServices: TabAgricultorasService) { }

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
