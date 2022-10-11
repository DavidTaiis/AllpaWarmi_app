import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeolocalizacionDomicilioPage } from './geolocalizacion-domicilio.page';

describe('GeolocalizacionDomicilioPage', () => {
  let component: GeolocalizacionDomicilioPage;
  let fixture: ComponentFixture<GeolocalizacionDomicilioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalizacionDomicilioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocalizacionDomicilioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
