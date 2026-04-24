import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Habitosp } from './habitosp';

describe('Habitosp', () => {
  let component: Habitosp;
  let fixture: ComponentFixture<Habitosp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Habitosp],
    }).compileComponents();

    fixture = TestBed.createComponent(Habitosp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
