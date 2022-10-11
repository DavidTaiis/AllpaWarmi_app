import { Component, OnInit} from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { FormGroup,  FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-perfil-ma',
  templateUrl: './perfil-ma.page.html',
  styleUrls: ['./perfil-ma.page.scss'],
})
export class PerfilMAPage implements OnInit {
  
  public form: FormGroup;

  constructor(public Mapa:MapasService,public fb: FormBuilder) { 
    this.form = this.fb.group({
      'rating': new FormControl([5])
    });
   
  }

  ngOnInit() {
  }
  async ngAfterViewInit(){
    this.Mapa.createMap();
  }
}
