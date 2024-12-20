import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSearchComponent } from './deck-search.component';

describe('DeckSearchComponent', () => {
  let component: DeckSearchComponent;
  let fixture: ComponentFixture<DeckSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
