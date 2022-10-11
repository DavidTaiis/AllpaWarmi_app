import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }
}
