import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterGamesComponent } from './shooter-games.component';

describe('ShooterGamesComponent', () => {
  let component: ShooterGamesComponent;
  let fixture: ComponentFixture<ShooterGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShooterGamesComponent]
    });
    fixture = TestBed.createComponent(ShooterGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
