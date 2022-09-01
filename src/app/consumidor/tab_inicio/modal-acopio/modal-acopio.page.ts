import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-acopio',
  templateUrl: './modal-acopio.page.html',
  styleUrls: ['./modal-acopio.page.scss'],
})
export class ModalAcopioPage implements OnInit {

  @Input() marker:any;
  constructor() { }

  ngOnInit() {
  }

}
