import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  valueSelected: String = "1";
  constructor() { }

  ngOnInit() {
  }
  segmentChange(event: CustomEvent){
    this.valueSelected = event.detail.value;
  }


}
