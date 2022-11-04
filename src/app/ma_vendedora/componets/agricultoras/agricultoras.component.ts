import { Component, OnInit } from '@angular/core';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';

@Component({
  selector: 'app-agricultoras',
  templateUrl: './agricultoras.component.html',
  styleUrls: ['./agricultoras.component.scss'],
})
export class AgricultorasComponent implements OnInit {
  listFarmers:any;
  searchFarmer:any;

  constructor(private tabAgricultorasServices: TabAgricultorasService) { }

  ngOnInit() {
    this.getFarmers();
  }
  getFarmers(){
    this.tabAgricultorasServices.getFarmers()
    .subscribe(  (res) => {
      this.listFarmers = res;
      this.searchFarmer = this.listFarmers;

    },
    response => {
      console.log(response['error']['warning'][0]['value'])
  },
  () => {
      console.log("The POST observable is now completed.");
  });
  }
  searchMa(event){
    const text = event.target.value;
    this.searchFarmer = this.listFarmers;
    if(text && text.trim() != ''){
      this.searchFarmer = this.searchFarmer.filter((farmer:any)=> {
        return (farmer.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }
}
