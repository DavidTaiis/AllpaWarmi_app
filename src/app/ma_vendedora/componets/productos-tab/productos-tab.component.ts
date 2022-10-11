import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-tab',
  templateUrl: './productos-tab.component.html',
  styleUrls: ['./productos-tab.component.scss'],
})
export class ProductosTabComponent implements OnInit {
  id:any;
  farmer:any;
  name: any;
  phone:any;
  products : any;

  constructor() { }

  ngOnInit() {}

}
