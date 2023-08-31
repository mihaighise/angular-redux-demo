import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { getPosts } from "src/app/posts/state/posts.selectors";
import { Post } from "src/app/models/posts.model";
import { Observable, Subject } from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]>;
  notifier: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.posts$ = this.store.select(getPosts);
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
