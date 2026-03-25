import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesAdminComponent } from './pacientes-admin.component';

describe('PacientesAdminComponent', () => {
  let component: PacientesAdminComponent;
  let fixture: ComponentFixture<PacientesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
