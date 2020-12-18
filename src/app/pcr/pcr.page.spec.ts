import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PcrPage } from './pcr.page';

describe('PcrPage', () => {
  let component: PcrPage;
  let fixture: ComponentFixture<PcrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PcrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
