import { Injectable } from '@angular/core';
import { Task } from './models/task';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService: WebService) { }

  getLists(){
    return this.webService.get('lists');
  }

  createList(title){
    return this.webService.post('lists', {title})
  }

  getTasks(listId){
    return this.webService.get(`lists/${listId}/tasks`)
  }

  createTask(listId, title){
    return this.webService.post(`lists/${listId}/tasks`, {title})
  }

  deleteList(listId){
    return this.webService.delete(`lists/${listId}`)
  }

  deleteTask(listId, taskId){
    return this.webService.delete(`lists/${listId}/tasks/${taskId}`)
  }

  setCompleted(listId, task: Task){
    return this.webService.patch(`lists/${listId}/tasks/${task._id}`, {completed: !task.completed} )
  }
}
