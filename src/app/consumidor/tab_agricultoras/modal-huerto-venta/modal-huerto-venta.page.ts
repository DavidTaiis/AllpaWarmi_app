import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-huerto-venta',
  templateUrl: './modal-huerto-venta.page.html',
  styleUrls: ['./modal-huerto-venta.page.scss'],
})  
export class ModalHuertoVentaPage implements OnInit {
  @Input() name:any;
  @Input() description:any;
  @Input() type:any;
  @Input() id:any;
  @Input() users_id:any;
  
  constructor(private router:Router,private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  viewProfile(){
    this.router.navigate(['/consumidor/tab-inicial/perfil-ma', this.users_id]);
    this.modalCtrl.dismiss();
  }

  
}