import { mapGetters } from "vuex";
import Navigation from "../../components/Navigation.vue";
import {
    getName,
    getId,
    logout,
    getToken
}
from '../../config';
import { CREATE_COMMENT, CREATE_LIKE, CREATE_POST, DELETE_POST, GET_LIKE, GET_POSTS } from "../../store/action";
export default {
    name: "Homepage",
    data() {
        return {
            showBox: true,
            likePost: false,
            post: '',
            id: '',
            post_id: '',
            post_like_id: '',
            post_comment: ''
        };
    },
    methods: {
        deletePost(payload) {
            this.$store.dispatch(DELETE_POST, payload).then(() => {
                this.getPosts();
            }).catch(error => {
                alert(error.response.data.error);
            })
        },
        showBoxes(post) {
            if(this.post_id !== post) {
                this.post_id = post;
            }else{
                this.post_id = '';
            }
        },
        createPost() {
            const payload = {
                'post': this.post,

            };
            this.$store.dispatch(CREATE_POST, payload).then(
                () => {

                    this.getPosts();
                    this.post = "";
                }
            ).catch((error) => {
                alert(error.response.data.error)
            })
        },
        getPosts() {
            this.$store.dispatch(GET_POSTS).then(
                (data) => {
                    console.log(data.data)
                    data.data.forEach(function(post) {
                        this.getLike(post.id);
                    });
                }
            );
        },
        createLike(post) {
            const payload = {
                "post": post
            };
            this.$store.dispatch(CREATE_LIKE, payload).then(() => {
                this.getLike(post);
                this.getPosts()
            });

        },
        getLike(post) {

            this.$store.dispatch(GET_LIKE, post).then(() => {
                this.post_like_id = post;
            });
        },
        createComment(post) {
            // alert(post)
            const payload = {
                "comment": this.post_comment,
                "post": post
            };
            this.$store.dispatch(CREATE_COMMENT, payload).then(
                () => {
                    this.getPosts();
                    this.post_comment = "";
                }
            ).catch((error) => {
                alert(error.response.data.error)
            });
        },
        logout() {
            logout();
            this.auth = false;
            // this.account_info = 'Account';
            this.$router.push({ name: 'Login' });
        },
        getToken() {
            if (getToken()) {
                this.auth = true
            }
        },
        containsObject(list) {
            list.map(like => {
                if (this.id = like._id) {
                    return true
                }
            })

        },
    },
    computed: {
        ...mapGetters(['posts'])
    },
    components: {
        Navigation,
    },
    mounted() {
        this.name = getName();
        this.getPosts();
        this.id = getId();
    }
}
