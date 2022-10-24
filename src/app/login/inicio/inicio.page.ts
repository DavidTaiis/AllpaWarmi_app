import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
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
  rol:any;
  constructor(public menu : MenuController,private navCtrl: NavController, private loginService: LoginServiceService) {
    this.menu.enable(false);
      this.menu.swipeGesture(false)
      this.rol = localStorage.getItem('rol');
      if(localStorage.getItem('accessToken')){
        this.loginService.getUser().subscribe( res => {
          for (let index = 0; index < res['role'].length; index++) {
            if(this.rol === res['role'][index].name){
              switch (this.rol) {
                case 'Consumidor':
                  location.href = 'consumidor/tab-inicial/inicio';
                  break;
                case 'Vendedora':
                  location.href = 'ma_vendedora/menu/inicio';
                  break;
                case 'Lidereza':
                  location.href = 'ma_lideresa/menu/inicio';
                  break;
              }           
            }      
          }
        });   
      }
   }

  
  ngOnInit() {
   
  }
  
  ionViewWillEnter(){
    setTimeout(() => {
      
    }, 1000);
  }
  navegacionLogin (){
  switch(this.tipoUsuario){
    case 'Consumidor':
      this.loginService.autentification(this.cedula,this.contrasena, this.tipoUsuario).subscribe( (val) => {
        this.accesToken = val['accessToken'];
        localStorage.setItem('accessToken',this.accesToken)
        location.href = 'consumidor/geolocalizacion-domicilio';
        localStorage.setItem('rol', this.tipoUsuario)

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
            this.accesToken = val['accessToken'];
            localStorage.setItem('accessToken',this.accesToken)
            localStorage.setItem('rol', this.tipoAgricultora)
            location.href = 'ma_lideresa/geolocalizacion';

            break;
          case 'Acopiadora':
            this.accesToken = val['accessToken'];
            localStorage.setItem('accessToken',this.accesToken)
            localStorage.setItem('rol', this.tipoAgricultora)
            location.href = '/ma_acopiadora/geolocalizacion';
            break;
          case 'Vendedora':
            this.accesToken = val['accessToken'];
            localStorage.setItem('accessToken',this.accesToken)
            localStorage.setItem('rol', this.tipoAgricultora)
            location.href = '/ma_vendedora/geolocalizacion-huerto';
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
              this.accesToken = val['accessToken'];
              localStorage.setItem('accessToken',this.accesToken)
            localStorage.setItem('rol', this.tipoConductor)
            location.href = '/c_bus/menu/inicio';
            break;
            case 'Camioneta':
              this.accesToken = val['accessToken'];
              localStorage.setItem('accessToken',this.accesToken)
            localStorage.setItem('rol', this.tipoConductor)
            location.href = '/c_camioneta/geolocalizacion';
              break;
            case 'Privado':
              this.accesToken = val['accessToken'];
              localStorage.setItem('accessToken',this.accesToken)
            localStorage.setItem('rol', this.tipoConductor)
            location.href = '/c_privado/geolocalizacion-salida';
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
