import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeolocalizacionLlegadaPage } from './geolocalizacion-llegada.page';

describe('GeolocalizacionLlegadaPage', () => {
  let component: GeolocalizacionLlegadaPage;
  let fixture: ComponentFixture<GeolocalizacionLlegadaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalizacionLlegadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocalizacionLlegadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
