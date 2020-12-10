import { PostService } from "../../services";
import { CREATE_POST, DELETE_POST, GET_POSTS } from "../action";
import { SET_POSTS } from "../mutation";

const initialState = {
    posts: [],
};

const state = {...initialState };

const actions = {
    async [GET_POSTS](context) {
        const { data } = await PostService.getPosts();
        context.commit(SET_POSTS, data.data);
        return data;
    },
    async [CREATE_POST](context, payload) {
        const { data } = await PostService.createPost(payload);
        return data;
    },
    async [DELETE_POST](context, payload) {
        const { data } = await PostService.deletePost(payload);
        return data;
    },
};

const mutations = {
    [SET_POSTS](state, posts) {
        state.posts = posts;
    },
};

const getters = {
    posts(state) {
        return state.posts;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}