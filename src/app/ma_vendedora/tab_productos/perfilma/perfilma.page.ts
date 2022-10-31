import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-perfilma',
  templateUrl: './perfilma.page.html',
  styleUrls: ['./perfilma.page.scss'],
})
export class PerfilmaPage implements OnInit {
  id:any;
  farmer:any;
  name: any;
  phone:any;
  feature:any;
  foto:any;
  phoneNumber:any;
  identification_card:any;
  products:any;
  constructor(private tabAgricultorasService: TabAgricultorasService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getFarmerId();
    this.getProductsId();
  }
  getFarmerId(){
    this.tabAgricultorasService.getFarmerId(this.id)
   .subscribe(  (res) => {
   this.farmer = res;
   this.name = res['name'];
     this.phone = res['phone'];
     this.identification_card = res['idetification_card'];
     this.foto = res['photo'][0] ? res['photo'][0]['url'] : "";
     this.phoneNumber = this.phone.substring(1);
 },
 response => {
   console.log(response['error']['warning'][0]['value'])
},
() => {
   console.log("The POST observable is now completed.");
});
 }
 getProductsId(){

  this.tabAgricultorasService.getProductsId(this.id)
  .subscribe(  (res) => {
   this.products = res;
  },
  response => {
    console.log(response['error']['warning'][0]['value'])
},
() => {
    console.log("The POST observable is now completed.");
});

}
}
