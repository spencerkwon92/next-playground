import User from './user';
import Comment from './comment';

export default interface Post{
  id: number;
  content: string;
  Linkers: Partial<User>[];
  Images: Array<{src: string}>;
  User: Partial<User> & {id: number};
  createdAt: string;
  Comment: Comment[];
}