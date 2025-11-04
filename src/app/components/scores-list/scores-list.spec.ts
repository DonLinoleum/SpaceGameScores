import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresList } from './scores-list';

describe('ScoresList', () => {
  let component: ScoresList;
  let fixture: ComponentFixture<ScoresList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoresList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoresList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
