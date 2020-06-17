import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetalleComponent } from './users-detalle.component';

describe('UsersDetalleComponent', () => {
  let component: UsersDetalleComponent;
  let fixture: ComponentFixture<UsersDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
