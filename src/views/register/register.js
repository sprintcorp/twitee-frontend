import { REGISTER_USER } from "../../store/action";

export default {
    name: 'Register',
    data() {
        return {
            password: '',
            email: '',
            firstname: '',
            lastname: '',
        }
    },
    methods: {
        register() {
            const payload = {
                'email': this.email,
                'firstname': this.firstname,
                'lastname': this.lastname,
                'password': this.password
            };
            this.$store.dispatch(REGISTER_USER, payload).then(
                () => {
                    alert("Registration Successful")
                }).catch(
                (error) => {
                    alert(error.response.data.error);
                });
        }
    }
}