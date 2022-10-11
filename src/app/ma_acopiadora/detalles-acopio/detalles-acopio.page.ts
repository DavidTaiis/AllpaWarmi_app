import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';

@Component({
  selector: 'app-detalles-acopio',
  templateUrl: './detalles-acopio.page.html',
  styleUrls: ['./detalles-acopio.page.scss'],
})
export class DetallesAcopioPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }

  async ngAfterViewInit(){
    this.Mapa.createMap();
  }
}
