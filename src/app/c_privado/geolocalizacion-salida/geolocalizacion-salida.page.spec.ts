import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeolocalizacionSalidaPage } from './geolocalizacion-salida.page';

describe('GeolocalizacionSalidaPage', () => {
  let component: GeolocalizacionSalidaPage;
  let fixture: ComponentFixture<GeolocalizacionSalidaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalizacionSalidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocalizacionSalidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
