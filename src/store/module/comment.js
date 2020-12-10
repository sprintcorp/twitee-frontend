import { CommentService } from "../../services";
import { CREATE_COMMENT } from "../action";


const actions = {
    async [CREATE_COMMENT](context, payload) {
        const { data } = await CommentService.createComment(payload);
        return data;
    },
};



export default {
    actions,

}