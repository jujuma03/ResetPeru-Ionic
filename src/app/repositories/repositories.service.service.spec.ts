import { TestBed, inject } from '@angular/core/testing';

import { Repositories.ServiceService } from './repositories.service.service';

describe('Repositories.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Repositories.ServiceService]
    });
  });

  it('should be created', inject([Repositories.ServiceService], (service: Repositories.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
