import { Component, OnInit } from '@angular/core';
import { PrivadoService } from 'src/app/services/c_privado/privado.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.scss'],
})
export class PrivadoComponent implements OnInit {
  feature:any;
  modal:any;
  constructor(private privadoService: PrivadoService) { }

  ngOnInit() {
    this.getPrivado();
    this.modal = "Privado";
  }

  getPrivado(){
    this.privadoService.getPrivado().subscribe( res => {
      this.feature = res;
    })
  }
}
