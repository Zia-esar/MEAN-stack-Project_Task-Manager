import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
      this.route.params.subscribe((params: Params)=> this.listId = params.listId)
    }

  ngOnInit(): void {
  }

  addTask(title){
    this.taskService.createTask(this.listId, title)
      .subscribe((params: Params)=> this.router.navigate(['../'], { relativeTo: this.route}))
  }

}
