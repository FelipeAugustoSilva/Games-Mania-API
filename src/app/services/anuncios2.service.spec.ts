import { TestBed } from '@angular/core/testing';

import { Anuncios2Service } from './anuncios2.service';

describe('Anuncios2Service', () => {
  let service: Anuncios2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Anuncios2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
