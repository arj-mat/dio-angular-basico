import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaryItemsComponent } from './legendary-items.component';

describe('LegendaryItemsComponent', () => {
  let component: LegendaryItemsComponent;
  let fixture: ComponentFixture<LegendaryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendaryItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendaryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
