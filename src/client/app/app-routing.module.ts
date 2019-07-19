import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogCreateComponent } from './blogs/blog-create/blog-create.component';

const routes: Routes = [
  {
    path: 'blogs/create',
    component: BlogCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
