import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistfileComponent } from './userlistfile.component';

describe('UserlistfileComponent', () => {
  let component: UserlistfileComponent;
  let fixture: ComponentFixture<UserlistfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
