import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

class AuthService {
  _firebaseAuth = null;
  _googleProvider = null;
  _githubProvider = null;

  constructor() {
    this._firebaseAuth = getAuth();
    this._googleProvider = new GoogleAuthProvider();
    this._githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this._firebaseAuth, authProvider);
  }

  logout() {
    this._firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    this._firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this._googleProvider;
      case 'Github':
        return this._githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
