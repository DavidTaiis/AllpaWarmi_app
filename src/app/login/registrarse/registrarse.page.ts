import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
public roles : string = "";
public name : string = "";
public identification_card : string = "";
public password : string = "";
public confirmate_password : string = "";
public role : string = "";
public phone_number : string = "";
public is_association : string = "";
public tipoAgricultora: string[] = [];
public tipoConductor: string[] = [];
selectAgricultora: boolean = false;
selectConductor: boolean = false;
isSubmitted = false;
ionicForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public menu : MenuController, private navCtrl: NavController, private loginService: LoginServiceService,private alertController: AlertController) { 
    this.menu.enable(false);
    this.menu.swipeGesture(false)

    this.ionicForm = this.formBuilder.group({
      'identification_card': new FormControl("",[Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      'name': new FormControl("", Validators.required),
      'role': new FormControl("", Validators.required),
      'phone_number': new  FormControl("",[Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      'password': new FormControl("", Validators.required),
      'confirmate_password' : new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  async terminos(){
    this.isSubmitted = true;
  if (!this.ionicForm.valid) {
    console.log('Please provide all the required values!')
    return false;
  } else {


    const alert = await this.alertController.create({
      cssClass:'app-alert',
      header:'Terminos y condiciones',
      
      subHeader: 'Al aceptar los terminos y condiciones sus nombres y datos ingresados serán de conocimiento público, los cuales serán visualizados por todos los usuarios de la aplicacion móvil ',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
           
          },
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
          this.register();
          },
        },
      ],
    });
  
    await alert.present();
  }
  }

  async register(){
    switch(this.role){
      case "Consumidor":
        this.loginService.register(this.name, this.identification_card,this.phone_number, this.role, this.password , this.is_association)
        .subscribe( async (res) => {
          const alert = await this.alertController.create({
            // css personalizado
            cssClass:'app-alert',
            header: '¡Exito!',
            message: 'Usuario creado correctamente!',
            buttons: ['OK'],            
          });
      
           await alert.present();
           this.navCtrl.navigateForward('/');

        },
        response => {
          console.log(response['error']['warning'][0]['value'])
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      break;

      case "Agricultora":
        this.loginService.register(this.name, this.identification_card,this.phone_number, this.tipoAgricultora, this.password , this.is_association)
        .subscribe( async (res) => {
          const alert = await this.alertController.create({
            // css personalizado
            cssClass:'app-alert',
            header: '¡Exito!',
            message: 'Usuario creado correctamente!',
            buttons: ['OK'],
           
          });
      
           await alert.present();
          this.navCtrl.navigateForward('/');
           
        },
        response => {
          console.log(response['error']['warning'][0]['value'])
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      break;

      case "Conductor":
        this.loginService.register(this.name, this.identification_card,this.phone_number, this.tipoConductor, this.password , this.is_association)
        .subscribe( async (res) => {
          const alert = await this.alertController.create({
            // css personalizado
            cssClass:'app-alert',
            header: '¡Exito!',
            message: 'Usuario creado correctamente!',
            buttons: ['OK'],
          });
      
           await alert.present();
           this.navCtrl.navigateForward('/');

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
    switch(this.role){
  
      case 'Consumidor':
        console.log(this.role)
  
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
