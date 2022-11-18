import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage implements OnInit {
  id: any;
  driver: any;
  name: any;
  phone: any;
  car_plate: any;
  description: any;
  type: any;
  color: any;
  image: any;
  nameSeller:any;
  phoneSeller:any;
  phoneNumber:any;
  device_token:any;
  id_user:any;
  date:any =new Date();
  

  constructor(
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
    private tabTransporteService: TabTransporteService,
    private consumerService:TabAgricultorasService,
    private alertController: AlertController
  ) {
    this.form = this.fb.group({
      rating: new FormControl([5]),
      calificar: new FormControl([0]),
    });
  }
  public form: FormGroup;
  ngOnInit() {
  console.log(this.date)

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProfile();
    this.getUser();
  }
  getProfile() {
    this.tabTransporteService.getCamionetaId(this.id).subscribe(
      (res) => {
        this.driver = res;
        this.name = res['name'];
        this.phone = res['phone'];
        this.car_plate = res['car_plate'];
        this.description = res['description'];
        this.type = res['type'];
        this.color = res['color'];
        this.image = res['image'];
        this.phoneNumber = this.phone.substring(1);
        this.device_token = res['device_token'];
        this.id_user= res['id_user'];
      
      },
      (response) => {
        console.log(response['error']['warning'][0]['value']);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
  }
  
  contactWhatsApp() {  
   let  month = '' + (this.date.getMonth() + 1);
    let day = '' + this.date.getDate(),
        year = this.date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    let dateComplete = [year, month, day].join('-');
    this.tabTransporteService.addServiceDriver(this.id_user, dateComplete).subscribe(res=>{
      location.href = `https://api.whatsapp.com/send?phone=593${this.phoneNumber}&` +
      'text=Hola%20soy,%20'+`${this.nameSeller}`+' por favor, necesito de su servicio de camioneta%20&source=&data=';
  
    })

 
   
  }
  sendNotification(){
    let title = "Nueva solicitud de carrera";
    let message = `Hola soy ${this.nameSeller} solicito de tus servicios`
    this.consumerService.sendNotification(message, title, this.device_token).subscribe(res => {
      console.log("enviada")
    })
  }

    getUser() {
    this.consumerService.getUser().subscribe((res) => {
      this.nameSeller = res['name'];
      this.phoneSeller = res['phone'];
    });
  }
  async confirmWhatsApp(){
    const alert = await this.alertController.create({
      cssClass:'app-alert',
      header:'¿Deseas realizar esta solocitud?',
      
      subHeader: 'Para finalizar el proceso, establece una conversación con el conductor',
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
          handler: async() => {
            this.sendNotification();
            setTimeout(() => {
              this.contactWhatsApp();
            }, 2000);
          
          },
        },
      ],
    });
  
    await alert.present();
  }
  //rating
  heartIcons = {
    empty: '../../../../assets/iconos/lechuga_empty.svg',
    half: '../../../../assets/iconos/lechuga_mid.svg',
    full: '../../../../assets/iconos/lechuga_full.svg',
}
ratingDisplay: number;
  
  onRatingSet(rating: number): void {
    this.ratingDisplay = rating;
  }
  // fin rating
}
