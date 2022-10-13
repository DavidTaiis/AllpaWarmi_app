import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-notificaciones',
  templateUrl: './modal-notificaciones.page.html',
  styleUrls: ['./modal-notificaciones.page.scss'],
})
export class ModalNotificacionesPage implements OnInit {
  @Input() name;
  @Input() description;
  @Input() type;
  @Input() id;
  
  constructor() { }

  ngOnInit() {
  }

}
