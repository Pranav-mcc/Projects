import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorSportsComponent } from './indoor-sports.component';

describe('IndoorSportsComponent', () => {
  let component: IndoorSportsComponent;
  let fixture: ComponentFixture<IndoorSportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndoorSportsComponent]
    });
    fixture = TestBed.createComponent(IndoorSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
