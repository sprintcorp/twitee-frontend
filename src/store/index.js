import Vue from 'vue';
import Vuex from 'vuex';

import post from './module/post';
import auth from './module/auth';
import comment from './module/comment';
import like from './module/like';

Vue.use(Vuex);

const modules = {
    post,
    auth,
    comment,
    like
};

export default new Vuex.Store({
    modules
})