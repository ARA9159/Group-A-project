import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForAtmComponent } from './apply-for-atm.component';

describe('ApplyForAtmComponent', () => {
  let component: ApplyForAtmComponent;
  let fixture: ComponentFixture<ApplyForAtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForAtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
