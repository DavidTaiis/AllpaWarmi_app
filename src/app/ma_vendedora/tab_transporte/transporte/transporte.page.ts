import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {
  valueSelected: string  = "1";
  constructor() { }

  ngOnInit() {
  }
  segmentChange(event: CustomEvent){
    this.valueSelected = event.detail.value;
  }
}
