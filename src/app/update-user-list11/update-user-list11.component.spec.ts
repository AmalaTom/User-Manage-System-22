import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserList11Component } from './update-user-list11.component';

describe('UpdateUserList11Component', () => {
  let component: UpdateUserList11Component;
  let fixture: ComponentFixture<UpdateUserList11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserList11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserList11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
