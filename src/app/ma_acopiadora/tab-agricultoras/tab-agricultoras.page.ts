import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-agricultoras',
  templateUrl: './tab-agricultoras.page.html',
  styleUrls: ['./tab-agricultoras.page.scss'],
})
export class TabAgricultorasPage implements OnInit {
  role:any;
  constructor() { }

  ngOnInit() {
    this.role = "acopiadora";
  }

}
