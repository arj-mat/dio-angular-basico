import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RareItemsComponent } from './rare-items.component';

describe('RareItemsComponent', () => {
  let component: RareItemsComponent;
  let fixture: ComponentFixture<RareItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RareItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RareItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
