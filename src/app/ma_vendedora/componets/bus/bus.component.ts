import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss'],
})
export class BusComponent implements OnInit {
  listBusesLine:any;
  constructor(private tabTransporteService: TabTransporteService) { }

  ngOnInit() {
    this.getBusesLine();
  }


  getBusesLine(){
    this.tabTransporteService.getBusesLine()
    .subscribe(  (res) => {
      this.listBusesLine = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  
  }
}
