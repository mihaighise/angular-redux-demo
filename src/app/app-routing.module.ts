import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter/counter.component";
import { PostsComponent } from "src/app/posts/posts/posts.component";
import { AddPostComponent } from "src/app/posts/add-post/add-post.component";

const routes: Routes = [
  { path: '', component: CounterComponent},
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'counter', component: CounterComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
