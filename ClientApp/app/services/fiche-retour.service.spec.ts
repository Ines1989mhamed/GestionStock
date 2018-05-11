import { TestBed, inject } from '@angular/core/testing';

import { FicheRetourService } from './fiche-retour.service';

describe('FicheRetourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FicheRetourService]
    });
  });

  it('should be created', inject([FicheRetourService], (service: FicheRetourService) => {
    expect(service).toBeTruthy();
  }));
});
