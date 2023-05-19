/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecetaService } from './receta.service';

describe('Service: Receta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetaService]
    });
  });

  it('should ...', inject([RecetaService], (service: RecetaService) => {
    expect(service).toBeTruthy();
  }));
});
