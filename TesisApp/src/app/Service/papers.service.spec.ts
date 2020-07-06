/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PapersService } from './papers.service';

describe('Service: Papers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PapersService]
    });
  });

  it('should ...', inject([PapersService], (service: PapersService) => {
    expect(service).toBeTruthy();
  }));
});
