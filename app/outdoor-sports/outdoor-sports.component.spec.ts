import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorSportsComponent } from './outdoor-sports.component';

describe('OutdoorSportsComponent', () => {
  let component: OutdoorSportsComponent;
  let fixture: ComponentFixture<OutdoorSportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutdoorSportsComponent]
    });
    fixture = TestBed.createComponent(OutdoorSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
