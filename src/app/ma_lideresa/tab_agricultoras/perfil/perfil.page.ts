import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public form: FormGroup;
  constructor(public fb: FormBuilder) {
 
    this.form = this.fb.group({
      'rating': new FormControl([5])
    });
   }
  ngOnInit() {
  }

}
