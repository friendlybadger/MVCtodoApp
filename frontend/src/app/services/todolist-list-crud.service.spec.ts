import { TestBed } from '@angular/core/testing';

import { todoListCrudService } from './todolist-list-crud.service';

describe('TodoListCrudService', () => {
  let service: todoListCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(todoListCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
