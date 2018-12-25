import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';

class AuthService {

  getToken() {
    return localStorage.getItem('auth_token');
  }

  getExpiration(token) {    
    return moment.unix(jwt.decode(token).exp);
  }

  invalidateUser() {
    localStorage.removeItem('auth_token');
  } 

  isValid(token) {
    return moment().isBefore(this.getExpiration(token));
  }

  isAuthenticated() {
    const token = this.getToken();

    return token && this.isValid(token) ? true : false;
  }

}


export default new AuthService();