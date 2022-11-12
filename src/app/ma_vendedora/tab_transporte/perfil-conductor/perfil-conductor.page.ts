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
  date:any =new Date().toLocaleDateString();
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
    this.tabTransporteService.addServiceDriver(this.id, this.date).subscribe(res=>{
      location.href = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&` +
      'text=Hola%20soy,%20'+`${this.nameSeller}`+' por favor, necesito de su servicio de camioneta%20&source=&data=';
  
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
          handler: () => {
          this.contactWhatsApp();
          },
        },
      ],
    });
  
    await alert.present();
  }
  
}
