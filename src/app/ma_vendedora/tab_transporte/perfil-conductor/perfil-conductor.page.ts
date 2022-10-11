import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, FormBuilder, Validators } from '@angular/forms';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';


@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage implements OnInit {
  id:any;
  driver:any;
  name: any;
  phone:any;
  identification:any;
  constructor(public fb: FormBuilder,private tabTransporteService: TabTransporteService) { 
    this.form = this.fb.group({
      'rating': new FormControl([5]),
      'calificar' : new FormControl([0])
    });
  }
  public form: FormGroup;
  ngOnInit() {
  }
  getDriverId(){
    this.tabTransporteService.getDriverId(this.id)
    .subscribe(  (res) => {
      this.driver = res;
      this.name = res['name'];
      this.phone = res['phone']
      this.identification = res['identification_card']
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
    }

}
