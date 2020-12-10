import { LOGIN_USER } from "../../store/action";

export default {
    name: 'Login',
    data() {
        return {
            password: '',
            email: ''
        }
    },
    methods: {
        login() {
            const payload = {
                'email': this.email,
                'password': this.password
            };
            this.$store.dispatch(LOGIN_USER, payload).then(
                () => {
                    this.loading = false;
                    this.$router.push({ name: 'Home' });
                }
            ).catch((error) => {
                alert(error.response.data.error);
            })
        }
    },
}