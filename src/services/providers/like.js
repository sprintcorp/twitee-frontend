import BaseHandler from "../../handler/handler";

class LikeProvider extends BaseHandler {
    createLike(payload) {
        // console.log(payload);
        return this.post('api/v1/likes', payload);
    }

    getLike(payload) {
        return this.query('api/v1/likes?post=' +
            payload);
    }
}
export default LikeProvider;