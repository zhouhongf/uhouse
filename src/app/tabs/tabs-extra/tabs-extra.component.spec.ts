import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsExtraComponent } from './tabs-extra.component';

describe('TabsExtraComponent', () => {
  let component: TabsExtraComponent;
  let fixture: ComponentFixture<TabsExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsExtraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
