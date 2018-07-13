import { TestBed, inject } from '@angular/core/testing';

import { P2pService } from './p2p.service';

describe('P2pService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [P2pService]
    });
  });

  it('should be created', inject([P2pService], (service: P2pService) => {
    expect(service).toBeTruthy();
  }));
});
