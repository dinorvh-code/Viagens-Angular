import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toursp } from './toursp';

describe('Toursp', () => {
  let component: Toursp;
  let fixture: ComponentFixture<Toursp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toursp],
    }).compileComponents();

    fixture = TestBed.createComponent(Toursp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
