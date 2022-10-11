import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeolocalizacionHuertoPage } from './geolocalizacion-huerto.page';

describe('GeolocalizacionHuertoPage', () => {
  let component: GeolocalizacionHuertoPage;
  let fixture: ComponentFixture<GeolocalizacionHuertoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalizacionHuertoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocalizacionHuertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
