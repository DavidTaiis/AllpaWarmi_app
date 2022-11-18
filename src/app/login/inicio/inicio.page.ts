import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { AlertController } from '@ionic/angular';
import {
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  ionicForm: FormGroup;
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
  isSubmitted = false;
  device_token :any = '';

  constructor(private alertController: AlertController, public menu : MenuController,private navCtrl: NavController, private loginService: LoginServiceService,public formBuilder: FormBuilder) {
   
    this.ionicForm = this.formBuilder.group({
      'cedula': new FormControl("",[Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      'contrasena': new FormControl("", Validators.required),
      'tipoUsuario': new FormControl("", Validators.required)
    })


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
                case 'Acopiadora':
                  location.href = 'ma_acopiadora/menu/inicio';
                  break;
                case 'Bus':
                  location.href = 'c_bus/menu/inicio';
                  break;
                case 'Camioneta':
                  location.href = 'c_camioneta/menu/inicio';
                  break;
                case 'Privado':
                  location.href = 'c_privado/menu/inicio';
                  break;
              }           
            }      
          }
        });   
      }
   }

  
  ngOnInit() {
   
  }
  

  async navegacionLogin (){
    this.isSubmitted = true;
  if (!this.ionicForm.valid) {
    console.log('Please provide all the required values!')
    return false;
  } else {

 /*   await  PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });
      await PushNotifications.addListener('registration', (token: Token) => {
      this.device_token = token.value;  
      console.log(this.device_token)
    }); */

setTimeout(() => {
  switch(this.tipoUsuario){
    case 'Consumidor': 
      this.loginService.autentification(this.cedula,this.contrasena, this.tipoUsuario, this.device_token).subscribe( (val) => {
        this.accesToken = val['accessToken'];
        localStorage.setItem('accessToken',this.accesToken)
        location.href = 'consumidor/geolocalizacion-domicilio/2';
        localStorage.setItem('rol', this.tipoUsuario)

      },
     async response => {
        const alert = await this.alertController.create({
          // css personalizado
          cssClass:'app-alert',
          header: response['error']['warning'][0]['value'],
          message: 'Verifica tus datos y vuelve a ingresar',
          buttons: ['OK'],            
        });
    
         await alert.present();

      },
      () => {
          console.log("The POST observable is now completed.");
      });
    
      break;
    case 'Agricultora':
      this.loginService.autentification(this.cedula,this.contrasena, this.tipoAgricultora, this.device_token).subscribe( (val) => {
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
            location.href = '/ma_vendedora/geolocalizacion-huerto/2';
            break;
         }
      },
      async response => {
        const alert = await this.alertController.create({
          // css personalizado
          cssClass:'app-alert',
          header: response['error']['warning'][0]['value'],
          message: 'Verifica tus datos y vuelve a ingresar',
          buttons: ['OK'],            
        });
    
         await alert.present();
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      break;

      case 'Conductor':
        this.loginService.autentification(this.cedula,this.contrasena, this.tipoConductor, this.device_token).subscribe( (val) => {
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
       async response => {
        const alert = await this.alertController.create({
          // css personalizado
          cssClass:'app-alert',
          header: response['error']['warning'][0]['value'],
          message: 'Verifica tus datos y vuelve a ingresar',
          buttons: ['OK'],            
        });
      
           await alert.present();
        },
        () => {
            console.log("The POST observable is now completed.");
        });
        break;

  }
}, 1000);
  

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
  get errorControl() {
    return this.ionicForm.controls;
  }
}
