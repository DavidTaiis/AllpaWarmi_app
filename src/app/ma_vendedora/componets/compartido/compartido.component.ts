import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-compartido',
  templateUrl: './compartido.component.html',
  styleUrls: ['./compartido.component.scss'],
})
export class CompartidoComponent implements OnInit {
  shareds:any;
  constructor(private router: Router, private transServices: TabTransporteService) { }

  ngOnInit() {
    this.getShared();
  }

  gotoProfile(id){
    this.router.navigate([`/ma_vendedora/menu/transporte/perfil-conductor/${id}`]);
  }

  getShared(){
    this.transServices.getShared()
    .subscribe(  (res) => {
      this.shareds = res;
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }
}
