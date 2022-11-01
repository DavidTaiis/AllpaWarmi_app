import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-privado',
  templateUrl: './modal-privado.page.html',
  styleUrls: ['./modal-privado.page.scss'],
})
export class ModalPrivadoPage implements OnInit {
  @Input() car_plate:any;
  @Input() identification_card:any;
  @Input() color:any;
  @Input() description:any;
  @Input() user_name:any;
  @Input() phone_number:any;

  constructor() { }

  ngOnInit() {
  }

}
