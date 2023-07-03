import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMeetupComponent } from './change-meetup.component';

describe('ChangeMeetupComponent', () => {
  let component: ChangeMeetupComponent;
  let fixture: ComponentFixture<ChangeMeetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeMeetupComponent]
    });
    fixture = TestBed.createComponent(ChangeMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
