import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { AcopiadoraService } from 'src/app/services/ma_acopiadora/acopiadora.service';

@Component({
  selector: 'app-agricultoras',
  templateUrl: './agricultoras.component.html',
  styleUrls: ['./agricultoras.component.scss'],
})
export class AgricultorasComponent implements OnInit {
  modal: any;
  feature: any = [];
  localizacion: any;
  acopios: any;

  constructor(
    public modalController: ModalController,
    private tabagricultorasService: TabAgricultorasService,
    private acopiadoraService: AcopiadoraService,
    private loginService:LoginServiceService
  ) {}

  ngOnInit() {
    this.getAcopios();
    this.getGeolocationMa();

    this.modal = 'HuertoVenta';
    this.localizacion = false;
  }

  getGeolocationMa() {
    this.tabagricultorasService.getGeolocalizacionMa().subscribe(
      (res) => {
        this.feature = null;
        this.feature = res;
      },
      (response) => {
        console.log(response['error']['warning'][0]['value']);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }
  getAcopios() {
    this.acopiadoraService.getAcopios().subscribe((res) => {
      this.acopios = res;
    });
  }

}
