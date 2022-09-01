import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
@Component({
  selector: 'app-detalles-entrega',
  templateUrl: './detalles-entrega.page.html',
  styleUrls: ['./detalles-entrega.page.scss'],
})
export class DetallesEntregaPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }
}
