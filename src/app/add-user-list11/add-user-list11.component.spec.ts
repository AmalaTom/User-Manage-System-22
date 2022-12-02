import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserList11Component } from './add-user-list11.component';

describe('AddUserList11Component', () => {
  let component: AddUserList11Component;
  let fixture: ComponentFixture<AddUserList11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserList11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserList11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
