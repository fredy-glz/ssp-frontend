import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoDetailsComponent } from './psicologo-details.component';

describe('PsicologoDetailsComponent', () => {
  let component: PsicologoDetailsComponent;
  let fixture: ComponentFixture<PsicologoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicologoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
