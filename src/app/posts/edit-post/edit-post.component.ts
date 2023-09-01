import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Post } from "src/app/models/posts.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { getPostById } from "src/app/posts/state/posts.selectors";
import { Subject, takeUntil } from "rxjs";
import { updatePost } from "src/app/posts/state/posts.actions";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  post?: Post;
  notifier: Subject<void> = new Subject<void>();
  currentId?: string | null;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.notifier)).subscribe(params => {
      const selectedId = params.get('id')
      this.store.select(getPostById, {id: selectedId}).pipe(takeUntil(this.notifier)).subscribe((data: any) => {
        this.post = data;
      })
    })
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }

  updatePost() {
    if (!this.postForm.valid) {
      return;
    }
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    if (!this.post?.id) {
      return;
    }
    const post: Post = {
      id: this.post?.id.toString(),
      title,
      description,
    }
    this.store.dispatch(updatePost({ post }));
  }
}
