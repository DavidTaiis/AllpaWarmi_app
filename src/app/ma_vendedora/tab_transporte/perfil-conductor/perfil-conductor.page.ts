import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  car_plate:any;
  description:any;
  type:any;
  color:any;
  image:any;

  constructor(private activatedRoute: ActivatedRoute,public fb: FormBuilder,private tabTransporteService: TabTransporteService) { 
    this.form = this.fb.group({
      'rating': new FormControl([5]),
      'calificar' : new FormControl([0])
    });
  }
  public form: FormGroup;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getProfile();
  }
  getProfile(){
    this.tabTransporteService.getCamionetaId(this.id)
    .subscribe(  (res) => {
      this.driver = res;
      this.name = res['name'];
      this.phone = res['phone']
      this.car_plate = res["car_plate"];
      this.description = res["description"];
      this.type = res["type"];
      this.color = res["color"];
      this.image = res["image"];
    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
    }

}
