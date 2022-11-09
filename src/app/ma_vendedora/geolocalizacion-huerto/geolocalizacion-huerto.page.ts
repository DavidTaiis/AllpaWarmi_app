import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
@Component({
  selector: 'app-geolocalizacion-huerto',
  templateUrl: './geolocalizacion-huerto.page.html',
  styleUrls: ['./geolocalizacion-huerto.page.scss'],
})
export class GeolocalizacionHuertoPage implements OnInit {
  localizacion: any;
  puntoSelect: any;
  type: any = 'Huerto';
  description: any = '';
  isUpdated: any;
  days: any = '';
  hours: any = '';
  pointsGeolocation: any;
  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    public loginService: LoginServiceService,
    private tabAgricultorasService: TabAgricultorasService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.isUpdated = params.get('id');

    })
  }

  ngOnInit() {
    this.getGeolocation();
    this.localizacion = true;
  }

  continuar() {
    this.tabAgricultorasService
      .addGeolocalizacionMa(
        this.puntoSelect.lat,
        this.puntoSelect.lng,
        this.type,
        this.description,
        this.days,
        this.hours
      )
      .subscribe(
        async (res) => {
          const alert = await this.alertController.create({
            cssClass: 'app-alert',
            header: '¡Exito!',
            message: 'Ubicación registrada correctamente!',
            buttons: ['OK'],
          });

          await alert.present();
          this.router.navigate(['/ma_vendedora/geolocalizacion-venta']);
        },
        (response) => {
          console.log(response['error']['warning'][0]['value']);
        },
        () => {
          console.log('The POST observable is now completed.');
        }
      );
  }

  recibirData(positionSet: any) {
    this.puntoSelect = positionSet;
  }
  getGeolocation() {
    console.log(this.isUpdated);
    if (this.isUpdated > 1) {
      this.loginService.getGeolocalizacionAuth().subscribe((res) => {
        this.pointsGeolocation = res;
        if (this.pointsGeolocation.length > 0) {
          this.navCtrl.navigateForward(['ma_vendedora/menu/inicio']);
        }
      });
    }
  }
}
