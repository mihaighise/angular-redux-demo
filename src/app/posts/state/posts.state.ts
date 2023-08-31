import { Post } from "src/app/models/posts.model";

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    { id: '1',
      title: 'Samplet Title 1',
      'description': 'Sample Description 1'
    },
    { id: '2',
      title: 'Samplet Title 2',
      'description': 'Sample Description 1'
    },
    { id: '3',
      title: 'Samplet Title 3',
      'description': 'Sample Description 3'
    }
  ]
}
