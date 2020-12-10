import BaseHandler from "../../handler/handler";

class PostProvider extends BaseHandler {
    createPost(payload) {
        return this.post('api/v1/posts', payload);
    }

    getPosts() {
        return this.query('api/v1/posts');
    }

    deletePost(payload) {
        return this.delete('api/v1/posts/' + payload);
    }
}
export default PostProvider;