import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypacientComponent } from './mypacient.component';

describe('MypacientComponent', () => {
  let component: MypacientComponent;
  let fixture: ComponentFixture<MypacientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypacientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
