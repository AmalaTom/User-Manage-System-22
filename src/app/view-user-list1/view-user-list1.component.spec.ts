import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserList1Component } from './view-user-list1.component';

describe('ViewUserList1Component', () => {
  let component: ViewUserList1Component;
  let fixture: ComponentFixture<ViewUserList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserList1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
