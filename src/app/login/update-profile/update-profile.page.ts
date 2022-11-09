import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginServiceService } from 'src/app/services/login/login-service.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  newImage = '';
  newFile: any;
  foto:any;
  file:any;
  name:any;
  phone:any;
  tipoAgricultora=[];
  role:any = localStorage.getItem('rol');
  rolAgricultora=true;
  placeholderTipo:any;
  constructor(private loginService: LoginServiceService, private alertController: AlertController) { 
    this.getUser();
  }

  ngOnInit() {
    this.auxRoles();
  }
  async newImageUpload(event: any) {
    
    if (event.target.files && event.target.files[0]) {
        this.newFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = ((image) => {
            this.foto = image.target.result as string;
        });
        reader.readAsDataURL(event.target.files[0]);
      }
      this.file = event.target.files[0];
    }

  updateProfile(){
   
     const formdata = new FormData();
      formdata.append('image',this.file ?? "");
      formdata.append('name', this.name);
      formdata.append('phone_number', this.phone);
      for (let index = 0; index < this.tipoAgricultora.length; index++) {
        formdata.append('role[]', this.tipoAgricultora[index])
      }
     
      this.loginService.updateProfile(formdata).subscribe( async res => {
        const alert = await this.alertController.create({
          cssClass:'app-alert',
          header: '¡Exito!',
          message: 'Perfil actualizado correctamente!',
          buttons: ['OK'],
        });
  
         await alert.present();
         switch (this.role) {
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
       },response => {
        console.log(response['error']['warning'][0]['value'])
    },
    () => {
        console.log("The POST observable is now completed.");
    }); 
      
       
  }
  getUser(){
    this.loginService.getUser()
    .subscribe(res => {
      this.name = res['name'];
      this.phone = res['phone'];
      this.foto = res['photo'][0] ? res['photo'][0]['url'] : "";
      for (let index = 0; index < res['role'].length; index++) {  
        
       this.tipoAgricultora.push(res['role'][index].name)
       this.placeholderTipo = this.placeholderTipo + ', '+res['role'][index].name;
      }
    
      this.placeholderTipo = this.placeholderTipo.slice(1)

    })
  }
  auxRoles(){
    switch (this.role) {
      case 'Consumidor':
        this.rolAgricultora = false;
        break;
      case 'Bus':
        this.rolAgricultora = false;

        break;
      case 'Camioneta':
        this.rolAgricultora = false;

        break;
      case 'Privado':
        this.rolAgricultora = false;

        break;
    }    
  }

}
