import BaseHandler from "../../handler/handler";

class CommentProvider extends BaseHandler {
    createComment(payload) {
        return this.post('api/v1/comments', payload);
    }
}
export default CommentProvider;