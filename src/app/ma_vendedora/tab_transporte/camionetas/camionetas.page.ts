import { Component, OnInit } from '@angular/core';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-camionetas',
  templateUrl: './camionetas.page.html',
  styleUrls: ['./camionetas.page.scss'],
})
export class CamionetasPage implements OnInit {
  listCamionetas:any;
  constructor(private tabTransporteService: TabTransporteService) { }

  ngOnInit() {
    this.getCamionetas();
  }

  getCamionetas(){
    this.tabTransporteService.getCamionetas()
    .subscribe(  (res) => {
      this.listCamionetas = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  
  }

}
