import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { crudGuard } from './crud.guard';

describe('crudGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => crudGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
