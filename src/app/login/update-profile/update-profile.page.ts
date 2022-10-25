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
  constructor(private loginService: LoginServiceService, private alertController: AlertController) { 
    this.getUser();
  }

  ngOnInit() {
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

      this.loginService.updateProfile(formdata).subscribe( async res => {
        const alert = await this.alertController.create({
          cssClass:'app-alert',
          header: '¡Exito!',
          message: 'Perfil actualizado correctamente!',
          buttons: ['OK'],
        });
  
         await alert.present();
         window.location.href = '/consumidor/tab-inicial/inicio'; 
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
    })
  }

}
