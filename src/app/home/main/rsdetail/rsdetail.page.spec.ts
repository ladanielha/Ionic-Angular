import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RsdetailPage } from './rsdetail.page';

describe('RsdetailPage', () => {
  let component: RsdetailPage;
  let fixture: ComponentFixture<RsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
