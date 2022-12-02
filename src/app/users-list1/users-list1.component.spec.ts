import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersList1Component } from './users-list1.component';

describe('UsersList1Component', () => {
  let component: UsersList1Component;
  let fixture: ComponentFixture<UsersList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersList1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
