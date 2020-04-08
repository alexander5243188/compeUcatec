import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastasPage } from './pastas.page';

describe('PastasPage', () => {
  let component: PastasPage;
  let fixture: ComponentFixture<PastasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
