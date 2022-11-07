import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-tab-agricultoras',
  templateUrl: './tab-agricultoras.page.html',
  styleUrls: ['./tab-agricultoras.page.scss'],
})
export class TabAgricultorasPage implements OnInit {
  listFarmers:any;
  constructor(private tabAgricultorasServices: TabAgricultorasService) { }

  ngOnInit() {
    this.getFarmers();
  }
  getFarmers(){
    this.tabAgricultorasServices.getFarmers()
    .subscribe(  (res) => {
      this.listFarmers = res;
      console.log(this.listFarmers)
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }
}
