import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Post } from "src/app/models/posts.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { addPost } from "src/app/posts/state/posts.actions";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.postForm = new FormGroup({
      id: new FormControl(null, [Validators.required, Validators.minLength(1)]),
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {
  }

  addPost() {
    if (!this.postForm.valid) {
      return;
    }
    const post: Post = {
      id: this.postForm.value.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPost({post}));
  }
}
