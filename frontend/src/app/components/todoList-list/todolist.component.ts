import { AfterViewChecked, Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { todoListCrudService } from "src/app/services/todolist-list-crud.service";

import { TodoList } from "src/app/models/TodoList";
import { tap } from "rxjs/operators";

import { ChangeDetectionStrategy } from "@angular/core";  

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // selector: 'app-todolist-list',
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodoListComponent implements OnInit/*, AfterViewChecked*/ {
  groceries$!: Observable<TodoList[]>;
  
  loading=true;

  constructor(private todoListCrudService: todoListCrudService ) {}
  // ngAfterViewChecked() {
  //   this.todoListCrudService.detectChanges();
  // }

  ngOnInit(): void {
    this.groceries$ = this.fetchAll();
    
  } 
  
  fetchAll(): Observable<TodoList[]>{
    return this.todoListCrudService.fetchAll();
  }

  post(todoListItem: Partial<TodoList>): void {
    
    const item =(<string>todoListItem).trim();
    if(!item) return;
    // console.log(item);
    this.todoList$ = this.todoListCrudService
      .post({ item })
      .pipe(tap(()=> (this.todoList$=this.fetchAll())));
  }
  update(id: number, newItem: Partial<TodoList>): void{
    const item = (<string>newItem).trim();
    if(!item) return;

    const newTodoList:TodoList={
      id,
      item,
    };
    this.todoList$ = this.todoListCrudService
      .update(newTodoList)
      .pipe(tap(()=> (this.todoList$=this.fetchAll())));

    
  }
  delete(id:number): void{
    this.groceries$ = this.todoListCrudService
      .delete(id)
      .pipe(tap(()=> (this.groceries$=this.fetchAll())));

  }

} 
