export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export interface Posts {
  data: Post[];
  amount: number;
}
export interface PostsSliceState {
  items: Post[];
  currentPage: number;
  isLoading: boolean;
}
