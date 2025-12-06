import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingGame } from './racing-game';

describe('RacingGame', () => {
  let component: RacingGame;
  let fixture: ComponentFixture<RacingGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacingGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacingGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
