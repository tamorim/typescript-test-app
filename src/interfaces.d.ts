interface IPost {
  id?: number;
  name: string;
  post: string;
  postedAt: string;
  likes: number;
}

interface IAppState {
  previewPost: IPost;
}

interface IAppProps {
  posts?: IPost[];
  actions?: IActionProp;
}

interface IPostListProps extends IAppState {
  posts: IPost[];
  increaseLikes(id: number): void;
}

interface IPostProps extends IPost {
  increaseLikes?(id: number): void;
}

interface IPostAreaProps {
  updatePreviewPost(text: string): void;
  addPost(text: string): void;
}

interface IAction {
  type: string;
  payload?: any;
  error?: boolean;
}

interface IActionProp {
  addPost(text: string): void;
  increaseLikes(id: number): void;
}
