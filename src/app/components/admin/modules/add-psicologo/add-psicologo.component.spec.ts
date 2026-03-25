import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPsicologoComponent } from './add-psicologo.component';

describe('AddPsicologoComponent', () => {
  let component: AddPsicologoComponent;
  let fixture: ComponentFixture<AddPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
