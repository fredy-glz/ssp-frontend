import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologosAdminComponent } from './psicologos-admin.component';

describe('PsicologosAdminComponent', () => {
  let component: PsicologosAdminComponent;
  let fixture: ComponentFixture<PsicologosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicologosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
