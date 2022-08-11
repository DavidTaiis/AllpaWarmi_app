import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.page.html',
  styleUrls: ['./edicion.page.scss'],
})
export class EdicionPage implements OnInit {

  constructor(public Mapa:MapasService) { }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }

}
