// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {
    // get user data
    getProfile() {
        return decode(this.getToken());
    }

    // check if user's logged in
    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token); // handwaiving here
    }

    // check if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken, entity) {
        // Saves user token to localStorage
        console.log(idToken, entity);
        localStorage.setItem('id_token', idToken);
        if (entity === "doctor") {
            window.location.assign('/doctors-dashboard');
            localStorage.setItem('entity', 'doctor');
        } else if (entity === "patient") {
            window.location.assign('/patients-dashboard');
            localStorage.setItem('entity', 'patient');
        }
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
        // reset entity
        localStorage.removeItem('entity');
    }
    getEntity() {
        // Retrieves the type of user
        return localStorage.getItem('entity');
    }
}

export default new AuthService();
