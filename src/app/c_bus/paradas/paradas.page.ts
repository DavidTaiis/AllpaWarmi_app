import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.page.html',
  styleUrls: ['./paradas.page.scss'],
})
export class ParadasPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }

}
