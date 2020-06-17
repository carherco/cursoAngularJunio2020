import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMasterComponent } from './users-master.component';

describe('UsersMasterComponent', () => {
  let component: UsersMasterComponent;
  let fixture: ComponentFixture<UsersMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
