import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-noticias',
  templateUrl: './modal-noticias.page.html',
  styleUrls: ['./modal-noticias.page.scss'],
})
export class ModalNoticiasPage implements OnInit {
  @Input() description:any;
  @Input() title:any;
  @Input() date:any;
  @Input() status:any;
  constructor() { }

  ngOnInit() {
  }

}
