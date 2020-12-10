import { LikeService } from "../../services";
import { CREATE_LIKE, GET_LIKE } from "../action";
// import { SET_LIKE } from "../mutation";

const initialState = {
    likes: [],
};

const state = {...initialState };

const actions = {
    async [CREATE_LIKE](context, payload) {
        const { data } = await LikeService.createLike(payload);
        return data;
    },
    async [GET_LIKE](context, payload) {
        const { data } = await LikeService.getLike(payload);
        return data;
    }
};

const mutations = {
    // [SET_LIKE](state, likes) {
    //     state.likes = likes;
    // },
};

const getters = {
    // likes(state) {
    //     return state.likes;
    // }
};

export default {
    state,
    actions,
    mutations,
    getters
}