import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { List } from 'src/app/models/list';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  list: List[] = [];
  tasks: Task[] = [];
  listId;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.taskService.getLists().subscribe((list: List[] )=> this.list = list)

    this.route.params.subscribe((params: Params)=> {
      this.listId = params.listId;
      if(!this.listId) return ;
      this.taskService.getTasks(this.listId).subscribe((tasks: Task[])=> this.tasks = tasks)
    })
  }

  onTaskClick(task: Task){
    console.log(task)
    this.taskService.setCompleted(this.listId, task).subscribe(() =>  {
      task.completed = !task.completed
    //  this.taskService.getTasks(this.listId).subscribe((tasks: Task[])=> this.tasks = tasks)
    })
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(this.listId, task._id).subscribe(() => {
      this.tasks = this.tasks.filter(item => item._id !== task._id)
    });
  }

  addTaskClick(){
    if(!this.listId){
      alert('Pleas Select a list first !!')
      return;
    }
    this.router.navigate(['./new-task'], {relativeTo: this.route})
  }

  deleteList(list: List){
    this.taskService.deleteList(list._id).subscribe(() => {
      this.list = this.list.filter(item => item._id !== list._id)
    });
    this.tasks = [];
  }

}
