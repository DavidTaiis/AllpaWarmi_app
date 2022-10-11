import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-camioneta',
  templateUrl: './camioneta.component.html',
  styleUrls: ['./camioneta.component.scss'],
})
export class CamionetaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  viewCars(){
    this.router.navigate(['/ma_vendedora/menu/transporte/camionetas'])
  }
}
