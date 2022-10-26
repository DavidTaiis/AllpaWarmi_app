import { Component, OnInit } from '@angular/core';
import { BusService } from 'src/app/services/c_bus/bus.service';

@Component({
  selector: 'app-tab-inicio',
  templateUrl: './tab-inicio.page.html',
  styleUrls: ['./tab-inicio.page.scss'],
})
export class TabInicioPage implements OnInit {
  feature:any;
  modal:any;
  constructor(private busService: BusService) { }

  ngOnInit() {
    this.getParadas();
    this.modal = "Paradas";
  }
  getParadas(){
    this.busService.getParadas().subscribe( res => {
      this.feature = res;
      console.log(this.feature)
    })
  }
}
