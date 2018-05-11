import { TestBed, inject } from '@angular/core/testing';

import { FicheSortieService } from './fiche-sortie.service';

describe('FicheSortieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FicheSortieService]
    });
  });

  it('should be created', inject([FicheSortieService], (service: FicheSortieService) => {
    expect(service).toBeTruthy();
  }));
});
