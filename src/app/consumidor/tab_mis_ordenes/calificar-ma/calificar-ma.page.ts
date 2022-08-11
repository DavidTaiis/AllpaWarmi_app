import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calificar-ma',
  templateUrl: './calificar-ma.page.html',
  styleUrls: ['./calificar-ma.page.scss'],
})
export class CalificarMaPage implements OnInit {
  public form: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.form = this.fb.group({
      'rating': new FormControl([5]),
      rating1: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
