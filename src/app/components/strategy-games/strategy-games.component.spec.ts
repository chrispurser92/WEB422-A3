import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyGamesComponent } from './strategy-games.component';

describe('StrategyGamesComponent', () => {
  let component: StrategyGamesComponent;
  let fixture: ComponentFixture<StrategyGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyGamesComponent]
    });
    fixture = TestBed.createComponent(StrategyGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
