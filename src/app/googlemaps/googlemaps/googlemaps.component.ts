import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, Inject  } from '@angular/core';
import { GooglemapsService } from '../googlemaps.service';
import { Geolocation } from '@capacitor/geolocation';


declare var google: any;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {

       // coordenadas cuenca
      public searchGoogle:String = "Ibarra";
      private autocomplete_init: boolean = false;
      @Input() feature: any;

       @Input() position = {  
        lat: -33.91722,
        lng: 151.23064
  };

  label = {
        titulo:'Ubicación',
        subtitulo: ''
  } 

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any

  @ViewChild('map') divMap: ElementRef;

  constructor(private renderer: Renderer2,
                  @Inject(DOCUMENT) private document,
                  private googlemapsService: GooglemapsService,) { }

  ngOnInit(): void  {
      
      this.init();

      console.log('position ->', this.position)
  }

  autocompleteFocus() {

      console.log('aqui')
      const input = document.getElementById("inputSearch") as HTMLInputElement;
      console.log(input.value)
      const search = new google.maps.places.Autocomplete(input);
      search.bindTo("bounds", this.map)

  }

  
  async init() {

    this.googlemapsService.init(this.renderer, this.document).then( () => {
          this.initMap();
    }).catch( (err) => {    
          console.log(err);
    });
    
}


initMap() {

    const position = this.position;

    let latLng = new google.maps.LatLng(position.lat, position.lng);

    let mapOptions = {
          center: latLng,
          zoom: 15,
          disableDefaultUI: false,
          clickableIcons: false,
    };

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
      


    this.marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          draggable: false,
    });
    this.clickHandleEvent();
    this.infowindow = new google.maps.InfoWindow();
    /* this.addMarker(position); */
    this.addMarkers();
    this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);

}

  addMarkers(){
          for (let i = 0; i < this.feature.length; i++) {
            const marker = new google.maps.Marker({
              position: {
                  lat: this.feature[i].position.lat,
                  lng: this.feature[i].position.lng,
              }, 
              map: this.map,
            });

            //Evento para mostrar datos
           /*  marker.addListener("click", () => {
                  this.infowindow.open({
                    anchor: marker,
                    map: this.map,
                    shouldFocus: false,
                  });
                });
 */
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

console.log('mylocation() click')

Geolocation.getCurrentPosition().then((res) => {

    console.log('mylocation() -> get ', res);

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
