import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoRunner } from './dino-runner';

describe('DinoRunner', () => {
  let component: DinoRunner;
  let fixture: ComponentFixture<DinoRunner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinoRunner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoRunner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
