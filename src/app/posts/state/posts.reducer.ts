import { createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/posts/state/posts.state";
import { addPost, deletePost, updatePost } from "src/app/posts/state/posts.actions";

const _postsReducer = createReducer(initialState,
  on(addPost, (state, action) => {
    let post = {...action.post};
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
  on(updatePost, (state, action) => {
    const updatedPosts = state.posts.map(post => post.id === action.post.id ? action.post : post);
    return {
      ...state,
      posts: updatedPosts
    }
  }),
  on(deletePost, (state, action) => {
    const updatedPosts = state.posts.filter(post => post.id !== action.id)
    return {
      ...state,
      posts: updatedPosts
    }
  }),
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
