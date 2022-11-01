import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, Inject,Output, EventEmitter  } from '@angular/core';
import { GooglemapsService } from '../googlemaps.service';
import { Geolocation } from '@capacitor/geolocation';
import { ModalController } from '@ionic/angular';
import { ModalHuertoVentaPage } from './../../consumidor/tab_agricultoras/modal-huerto-venta/modal-huerto-venta.page';
import { ModalCamionetaPage} from './../../ma_vendedora/modals/modal-camioneta/modal-camioneta.page';
import { ModalNoticiasPage} from './../../ma_vendedora/modals/modal-noticias/modal-noticias.page';
import { ModalNotificacionesPage } from 'src/app/ma_vendedora/modals/modal-notificaciones/modal-notificaciones.page';
import { AcopioModalPage} from './../../ma_acopiadora/modals/acopio-modal/acopio-modal.page';
import { ParadaPage } from './../../c_bus/modals/parada/parada.page';
import { ModalPrivadoPage} from './../../ma_vendedora/modals/modal-privado/modal-privado.page';
declare var google: any;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {
      @Output()
      enviar: EventEmitter<any> = new EventEmitter<any>();

       // coordenadas cuenca
      public searchGoogle:String = "";
      @Input() feature: any;
      @Input() modal: any;
      @Input() localizacion: any;
      @Input() buscador:boolean;
      @Input() miUbicacion:boolean; 
      @Input() posicionEdit:any;
       @Input() position = {  
        lat: -2.8972460110737996, 
        lng: -79.00628607009091
  };

  label = {
        titulo:'Ubicación',
        subtitulo: ''
  } 

  marker: any;
  infowindow: any;
  positionSet: any;
  map:any;

  @ViewChild('map') divMap: ElementRef;

  constructor(private renderer: Renderer2,
                  @Inject(DOCUMENT) private document,
                  private googlemapsService: GooglemapsService,private modalCtrl: ModalController) { }

  ngOnInit(): void  {
      setTimeout(() => {
        this.init();
      }, 1000);
    

  }
  
  async init() {
    this.googlemapsService.init(this.renderer, this.document).then( () => {
          this.initMap();
    }).catch( (err) => {    
          console.log(err);
    });
    
}


initMap() {
  let position = this.position;
  if(this.posicionEdit){
   position = this.posicionEdit;
  }
  
    let latLng = new google.maps.LatLng(position.lat, position.lng);

    let mapOptions = {
          center: latLng,
          zoom: 13,
          disableDefaultUI: false,
          clickableIcons: false,
    };
    
    
    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
    const mapa = this.map;
    this.marker = new google.maps.Marker({
          map: mapa,
          animation: google.maps.Animation.DROP,
          draggable: false,
    });
     
    this.infowindow = new google.maps.InfoWindow();
    if(this.localizacion == true){
      this.clickHandleEvent();
      this.addMarker(position);
    }    
    if(this.feature){
    this.addMarkers();
    }
    this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);
 

    /* Buscador */
   
      const input = document.getElementById("inputSearch") as HTMLInputElement;
      const search = new google.maps.places.Autocomplete(input);
      search.bindTo("bounds", mapa)

      search.addListener('place_changed', function(){
        let place = search.getPlace();
        console.log(place.geometry.viewport)
        if(!place.geometry.viewport){
          window.alert("Error al mostrar el lugar")
        }
        if(place.geometry.viewport){
      
          mapa.fitBounds(place.geometry.viewport);
        }else{
          mapa.setCenter(place.geometry.location);
          mapa.setZoom(18);
        }
      });
    
 

}

 async addMarkers(){
  let label = "";
           for (let i = 0; i < this.feature.length; i++) {
            if(this.feature[i].type){
              label = this.feature[i].type.substring(0,1);
            }else{
              if(this.feature[i].position.type){
                label = this.feature[i].position.type.substring(0,3);
              }
            }

               const marker = new google.maps.Marker({
              position: {
                  lat: Number(this.feature[i].position.lat),
                  lng: Number(this.feature[i].position.lng),
              }, 
              label: label,
              map: this.map,
            });
        
            //Evento para mostrar datos
            switch (this.modal) {
              case "HuertoVenta":
                marker.addListener("click",async () => {
                  const modal = await this.modalCtrl.create({
                  component: ModalHuertoVentaPage,
                  breakpoints: [0, 0.3, 0.5, 0.8],
                  initialBreakpoint: 0.5,
                  cssClass: 'custom-modal',
                  componentProps: {
                    name: this.feature[i].name,
                    description: this.feature[i].description,
                    type: this.feature[i].type,
                    id: this.feature[i].id,
                    users_id : this.feature[i].users_id
                  }
              });
              await modal.present();
              });
                break;
                case "Camioneta":
                  marker.addListener("click",async () => {
                    const modal = await this.modalCtrl.create({
                    component: ModalCamionetaPage,
                    breakpoints: [0, 0.3, 0.5, 0.8],
                    initialBreakpoint: 0.5,
                    cssClass: 'custom-modal',
                    componentProps: {
                      description: this.feature[i].description,
                      type: this.feature[i].type,
                      id: this.feature[i].id,
                      name : this.feature[i].name,
                     }
                });
                await modal.present();
                });

                break;
                case "Noticias":
                  marker.addListener("click",async () => {
                    const modal = await this.modalCtrl.create({
                    component: ModalNoticiasPage,
                    breakpoints: [0, 0.3, 0.5, 0.8],
                    initialBreakpoint: 0.5,
                    cssClass: 'custom-modal',
                    componentProps: {
                      description: this.feature[i].description,
                      title: this.feature[i].title,
                      id: this.feature[i].id,
                      date : this.feature[i].date,
                     }
                });
                await modal.present();
                });

                break;
                case "Notificaciones":
                  marker.addListener("click",async () => {
                    const modal = await this.modalCtrl.create({
                    component: ModalNotificacionesPage,
                    breakpoints: [0, 0.3, 0.5, 0.8],
                    initialBreakpoint: 0.5,
                    cssClass: 'custom-modal',
                    componentProps: {
                      description: this.feature[i].description,
                      type: this.feature[i].type,
                      id: this.feature[i].id,
                      name : this.feature[i].name,
                     }
                });
                await modal.present();
                });

                break;
                case "Acopio":
                  marker.addListener("click",async () => {
                    const modal = await this.modalCtrl.create({
                    component: AcopioModalPage,
                    breakpoints: [0, 0.3, 0.5, 0.8],
                    initialBreakpoint: 0.5,
                    cssClass: 'custom-modal',
                    componentProps: {
                      description: this.feature[i].description,
                      days: this.feature[i].days,
                      hours: this.feature[i].hours,
                      name : this.feature[i].name,
                     }
                });
                await modal.present();
                });

                break;
                case "Paradas":
                  marker.addListener("click",async () => {
                    const modal = await this.modalCtrl.create({
                    component: ParadaPage,
                    breakpoints: [0, 0.3, 0.5, 0.8],
                    initialBreakpoint: 0.5,
                    cssClass: 'custom-modal',
                    componentProps: {
                      nameLineBus: this.feature[i].nameLineBus,
                      descripcionLineBus: this.feature[i].descripcionLineBus,
                      priceLineBus: this.feature[i].priceLineBus,
                      descriptionStop : this.feature[i].descriptionStop,
                      nameStop:this.feature[i].nameStop,
                     }
                });
                await modal.present();
                });

                break;
                case "Privado":
                  marker.addListener("click",async () => {
                    const modal = await this.modalCtrl.create({
                    component: ModalPrivadoPage,
                    cssClass: 'custom-modal',
                      componentProps: {
                      car_plate: this.feature[i].car_plate,
                      identification_card: this.feature[i].identification_card,
                      color: this.feature[i].color,
                      description : this.feature[i].description,
                      user_name:this.feature[i].user_name,
                      phone_number:this.feature[i].phone_number,
                     }
                });
                await modal.present();
                });

                break;
            }
           

        }
        
      }

 clickHandleEvent() {

    this.map.addListener('click', (event: any) => {
          const position = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
          };
          this.addMarker(position);

    });
  
} 


 addMarker(position: any): void {

    let latLng = new google.maps.LatLng(position.lat, position.lng);

    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;
    this.enviar.emit(this.positionSet);

} 


 setInfoWindow(marker: any, titulo: string, subtitulo: string) {

  
    const contentString  =  '<div id="contentInsideMap">' +
                            '<div>' +
                            '</div>' +
                            '<p style="font-weight: bold; margin-bottom: 5px;">' + titulo + '</p>' +
                            '<div id="bodyContent">' +
                            '<p class"normal m-0">'
                            + subtitulo + '</p>' +
                            '</div>' +
                            '</div>';
    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);

}
 
 async mylocation() {

Geolocation.getCurrentPosition().then((res) => {

    const position = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
    }
    this.addMarker(position);

});

} 

aceptar() {
    console.log('click aceptar -> ', this.positionSet);
}

}
