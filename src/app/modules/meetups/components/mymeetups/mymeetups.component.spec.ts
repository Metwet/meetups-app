import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymeetupsComponent } from './mymeetups.component';

describe('MymeetupsComponent', () => {
  let component: MymeetupsComponent;
  let fixture: ComponentFixture<MymeetupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MymeetupsComponent]
    });
    fixture = TestBed.createComponent(MymeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
