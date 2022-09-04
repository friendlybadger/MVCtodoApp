import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { TodoList} from "../models/TodoList";
import { Observable } from 'rxjs';
import{catchError, tap}  from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
@Injectable({
  providedIn: 'root'
})


export class todoListCrudService {
  
  private url="http://localhost:3000/todoList";

  httpOptions: {headers: HttpHeaders}= {
    headers: new HttpHeaders ({"content-Type": "application/json"}),
  }

  constructor(
    private errorHandlerService:ErrorHandlerService, 
    private http: HttpClient) { }

  fetchAll():Observable<TodoList[]>{
    return this.http.get<TodoList[]>(this.url, {responseType: "json"})
    .pipe(tap((_)=>console.log('fetch todoList')),
     catchError(    
      this.errorHandlerService.handlerError<TodoList[]>("fetchAll",[])
     ));
    // (err:HttpErrorResponse)=>{console.log(err)};
  }

  post(item: Partial<TodoList>): Observable<any>{
    console.log(item);
    
    return this.http.post<Partial<TodoList>>(this.url, item, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handlerError<any>("post"))
     );
  }

  update(todoList: TodoList): Observable<any>{
    
    return this.http.
    put<TodoList>(this.url, todoList, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handlerError<any>("update")));
  }
  delete (id: number): Observable<any>{
    const url=`http://localhost:3000/todoList/${id}`;
    return this.http
    .delete<TodoList>(url, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handlerError<any>("delete")));
  }
  
}
