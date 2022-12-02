import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserList11Component } from './delete-user-list11.component';

describe('DeleteUserList11Component', () => {
  let component: DeleteUserList11Component;
  let fixture: ComponentFixture<DeleteUserList11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserList11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserList11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
