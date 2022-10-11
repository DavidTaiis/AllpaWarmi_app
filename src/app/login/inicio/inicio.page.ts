import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public accesToken = "";
  public respuesta:any = ""
  public cedula: string = "";
  public contrasena: string = "";
  public tipoAgricultora: string = "";
  public tipoConductor: string = "";
  public tipoUsuario: string = "";
  selectAgricultora: boolean = false;
  selectConductor: boolean = false;
  accessToken:any;
  constructor(private navCtrl: NavController, private loginService: LoginServiceService) { }

  ngOnInit() {
  }
  navegacionLogin (){
  switch(this.tipoUsuario){
    case 'Consumidor':
      this.loginService.autentification(this.cedula,this.contrasena, this.tipoUsuario).subscribe( (val) => {
        this.accesToken = val['accessToken'];
        localStorage.setItem('accessToken',this.accesToken)
        this.navCtrl.navigateForward('consumidor/geolocalizacion-domicilio');

      },
      response => {
          console.log(response['error']['warning'][0]['value'])
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      break;
    case 'Agricultora':
      this.loginService.autentification(this.cedula,this.contrasena, this.tipoAgricultora).subscribe( (val) => {
        switch (this.tipoAgricultora) {
          case 'Lidereza':
            
            this.navCtrl.navigateForward('ma_lideresa/geolocalizacion');
            break;
          case 'Acopiadora':
            this.navCtrl.navigateForward('/ma_acopiadora/geolocalizacion');
            break;
          case 'Vendedora':
            this.navCtrl.navigateForward('/ma_vendedora/geolocalizacion-huerto');
            break;
         }
      },
      response => {
          console.log(response['error']['warning'][0]['value'])
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      break;

      case 'Conductor':
        this.loginService.autentification(this.cedula,this.contrasena, this.tipoConductor).subscribe( (val) => {
          switch (this.tipoConductor) {
            case 'Bus':
              this.navCtrl.navigateForward('/c_bus/menu/inicio');
            break;
            case 'Camioneta':
              this.navCtrl.navigateForward('/c_camioneta/geolocalizacion');
              break;
            case 'Privado':
              this.navCtrl.navigateForward('/c_privado/geolocalizacion-salida');
              break;
            }
        },
        response => {
            console.log(response['error']['warning'][0]['value'])
        },
        () => {
            console.log("The POST observable is now completed.");
        });
        break;

  }

   
  }
  mostrar(){

  switch(this.tipoUsuario){

    case 'Consumidor':

    this.selectAgricultora = false;
    this.selectConductor = false;
    break;
    case 'Agricultora':
 

      this.selectAgricultora = true;
      this.selectConductor = false;
    break;
    case 'Conductor':

      this.selectAgricultora = false;
      this.selectConductor = true;
      break;

    
  }
  }
}
