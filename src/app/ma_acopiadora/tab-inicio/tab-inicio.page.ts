import { Component, OnInit } from '@angular/core';
import { AcopiadoraService } from 'src/app/services/ma_acopiadora/acopiadora.service';


@Component({
  selector: 'app-tab-inicio',
  templateUrl: './tab-inicio.page.html',
  styleUrls: ['./tab-inicio.page.scss'],
})
export class TabInicioPage implements OnInit {
  feature:any = [];
  modal:any;
  constructor(private acopioServices: AcopiadoraService) { }

  ngOnInit() {
    this.getAcopios();
    this.modal = "Acopio";
}

getAcopios(){
this.acopioServices.getAcopios().subscribe(res => {
  this.feature = res;
})
}
}
