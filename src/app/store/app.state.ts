import { CounterState } from "src/app/counter/state/counter.state";
import { PostsState } from "src/app/posts/state/posts.state";
import { counterReducer } from "src/app/counter/state/counter.reducer";
import { postsReducer } from "src/app/posts/state/posts.reducer";

export interface AppState {
  counter: CounterState,
  posts: PostsState
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer
}
