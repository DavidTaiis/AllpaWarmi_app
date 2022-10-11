import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
@Component({
  selector: 'app-tab-crear-acopio',
  templateUrl: './tab-crear-acopio.page.html',
  styleUrls: ['./tab-crear-acopio.page.scss'],
})
export class TabCrearAcopioPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }

  async ngAfterViewInit(){
    this.Mapa.createMap();
  }
}
