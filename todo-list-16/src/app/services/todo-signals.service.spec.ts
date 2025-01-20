import { TestBed } from '@angular/core/testing';

import { TodoSignalsService } from './todo-signals.service';

describe('TodoSignalsService', () => {
  let service: TodoSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
