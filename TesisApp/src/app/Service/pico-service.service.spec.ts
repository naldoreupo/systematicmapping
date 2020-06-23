/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PicoServiceService } from './pico-service.service';

describe('Service: PicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicoServiceService]
    });
  });

  it('should ...', inject([PicoServiceService], (service: PicoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
