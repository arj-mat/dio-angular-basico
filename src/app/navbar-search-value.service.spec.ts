import { TestBed } from '@angular/core/testing';

import { NavbarSearchValueService } from './navbar-search-value.service';

describe('NavbarSearchValueService', () => {
  let service: NavbarSearchValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarSearchValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
