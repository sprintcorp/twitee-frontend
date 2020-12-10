import BaseHandler from "../../handler/handler";

class AuthProvider extends BaseHandler {
    register(payload) {
        return this.post("api/v1/auth/register", payload);
    }

    login(payload) {
        return this.post("api/v1/auth/login", payload);
    }

    getUserInformation() {
        return this.query("api/v1/auth/me");
    }
}

export default AuthProvider;