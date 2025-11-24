import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlapyBird } from './flapy-bird';

describe('FlapyBird', () => {
  let component: FlapyBird;
  let fixture: ComponentFixture<FlapyBird>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlapyBird]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlapyBird);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
