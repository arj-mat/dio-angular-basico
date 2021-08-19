import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicItemsComponent } from './epic-items.component';

describe('EpicItemsComponent', () => {
  let component: EpicItemsComponent;
  let fixture: ComponentFixture<EpicItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
