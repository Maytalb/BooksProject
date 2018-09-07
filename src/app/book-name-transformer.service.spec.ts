import { TestBed, inject } from '@angular/core/testing';

import { BookNameTransformerService } from './book-name-transformer.service';

describe('BookNameTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookNameTransformerService]
    });
  });

  it('should be created', inject([BookNameTransformerService], (service: BookNameTransformerService) => {
    expect(service).toBeTruthy();
  }));
});
