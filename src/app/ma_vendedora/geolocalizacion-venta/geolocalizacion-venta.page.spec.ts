import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeolocalizacionVentaPage } from './geolocalizacion-venta.page';

describe('GeolocalizacionVentaPage', () => {
  let component: GeolocalizacionVentaPage;
  let fixture: ComponentFixture<GeolocalizacionVentaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalizacionVentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocalizacionVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
