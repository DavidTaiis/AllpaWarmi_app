import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compartido',
  templateUrl: './compartido.component.html',
  styleUrls: ['./compartido.component.scss'],
})
export class CompartidoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToProfile(){
    this.router.navigate(['/ma_vendedora/menu/transporte/perfil-conductor']);
  }
}
