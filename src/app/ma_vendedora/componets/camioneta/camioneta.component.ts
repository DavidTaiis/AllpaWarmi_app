import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-camioneta',
  templateUrl: './camioneta.component.html',
  styleUrls: ['./camioneta.component.scss'],
})
export class CamionetaComponent implements OnInit {
  feature:any;
  modal:any;
  constructor(private router:Router, private tabTransporteService: TabTransporteService) { }

  ngOnInit() {
    this.getCamionetas();
    this.modal = "Camioneta"
  }

  viewCars(){
    this.router.navigate(['/ma_vendedora/menu/transporte/camionetas']);
    
  }

  getCamionetas(){
  
    this.tabTransporteService.getCamionetas()
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
