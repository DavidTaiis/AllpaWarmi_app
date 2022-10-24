import { Component, OnInit } from '@angular/core';
import { LiderezaService } from 'src/app/services/ma_lidereza/lidereza.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  name:any;
  advantages:any;
  rules:any;
  localizacion:any;
  buscador:any;
  miUbicacion:any;
  feature:any;
  posicionEdit:any;
  constructor(private liderezaService: LiderezaService) { }

  ngOnInit() {
    this.localizacion = true;
    this.getASociation();
    this.buscador = true;
    this.miUbicacion=true;
  }

  getASociation(){
    this.liderezaService.getAsociation().subscribe(res => {
      this.name = res[0]['name'],
      this.advantages = res[0]['advantages'],
      this.rules = res[0]['rules']
      this.feature = [{
        'position': {
          'lat': res[0]['lat'],
          'lng': res[0]['lng']
        }
      }]
      this.posicionEdit = {  
        lat: Number(res[0]['lat']), 
        lng: Number(res[0]['lng'])
  };
    })
  }
}
