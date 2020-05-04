import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Task } from './../interfaces/task';
import { Observable  } from 'rxjs/Observable';
 

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public url: string; 

  constructor(private http: HttpClient) { 
    this.url = "https://dog.ceo/api/breeds/image/random";
  }

  // getAllTask(){
  //   const path = 'http://jsonplaceholder.typicode.com/todos';
  //   return this.http.get<Task[]>(path);
  // }

  // getTask(id: string){//objeto a retornar
  //   const path = `http://jsonplaceholder.typicode.com/todos/${id}`;
  //   return this.http.get<Task>(path);
  // }


  getPerro():Observable<any>{
    return this.http.get(this.url)
  }

}
