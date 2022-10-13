import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-camioneta',
  templateUrl: './modal-camioneta.page.html',
  styleUrls: ['./modal-camioneta.page.scss'],
})
export class ModalCamionetaPage implements OnInit {
  @Input() description:any;
  @Input() type:any;
  @Input() id:any;
  @Input() users_id:any;
  constructor() { }

  ngOnInit() {
  }

}
