import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAPIPage } from './lista-api.page';

describe('ListaAPIPage', () => {
  let component: ListaAPIPage;
  let fixture: ComponentFixture<ListaAPIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAPIPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAPIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
