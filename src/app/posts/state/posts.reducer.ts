import { createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/posts/state/posts.state";
import { addPost } from "src/app/posts/state/posts.actions";

const _postsReducer = createReducer(initialState,
  on(addPost, (state, action) => {
    let post = {...action.post};
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
