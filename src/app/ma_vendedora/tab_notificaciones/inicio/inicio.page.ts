import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  valueSelected: String = "1";
  constructor() { }

  ngOnInit() {
  }
  segmentChange(event: CustomEvent){
    this.valueSelected = event.detail.value;
  }

}
