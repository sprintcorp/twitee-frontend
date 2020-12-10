import CommentProvider from "./providers/comment";
import AuthProvider from "./providers/auth";
import PostProvider from "./providers/post";
import LikeProvider from "./providers/like";


export const CommentService = new CommentProvider();
export const PostService = new PostProvider();
export const LikeService = new LikeProvider();
export const AuthService = new AuthProvider();