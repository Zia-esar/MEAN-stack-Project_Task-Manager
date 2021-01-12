import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'lists', pathMatch: 'full'
  },
  {
    path: 'lists', component: ListViewComponent
  },
  {
    path: 'lists/:listId', component: ListViewComponent
  },
  {
    path: 'new-list', component: NewListComponent
  },
  {
    path: 'lists/:listId/new-task', component: NewTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
