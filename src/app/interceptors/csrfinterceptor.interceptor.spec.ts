import { TestBed } from '@angular/core/testing';

import { CSRFInterceptorInterceptor } from './csrfinterceptor.interceptor';

describe('CSRFInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CSRFInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CSRFInterceptorInterceptor = TestBed.inject(CSRFInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
