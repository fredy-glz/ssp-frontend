import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypacientCitasComponent } from './mypacient-citas.component';

describe('MypacientCitasComponent', () => {
  let component: MypacientCitasComponent;
  let fixture: ComponentFixture<MypacientCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypacientCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypacientCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
