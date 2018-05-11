import { TestBed, inject } from '@angular/core/testing';

import { TransporteurService } from './transporteur.service';

describe('TransporteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransporteurService]
    });
  });

  it('should be created', inject([TransporteurService], (service: TransporteurService) => {
    expect(service).toBeTruthy();
  }));
});
