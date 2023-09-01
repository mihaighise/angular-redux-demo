import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "src/app/posts/state/posts.state";
import { Post } from "src/app/models/posts.model";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
})

export const getPostById = createSelector(getPostsState, (state: PostsState, props: any) => {
  return state.posts.find((post: Post) => post.id === props.id)
})
