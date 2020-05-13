import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAzEDasitD6Cj6nc-dGkti9XHnLZ3DeRm4",
    authDomain: "register-react-fa8dc.firebaseapp.com",
    databaseURL: "https://register-react-fa8dc.firebaseio.com",
    projectId: "register-react-fa8dc",
    storageBucket: "register-react-fa8dc.appspot.com",
    messagingSenderId: "906260454045",
    appId: "1:906260454045:web:ec6c0bb57883e7a6659274",
    measurementId: "G-Q68ZLYS8EQ"
};


class Firebase {
    constructor() {
        // Initialize Firebase
        app.initializeApp(firebaseConfig);
        // app.analytics();
        this.auth = app.auth()
        this.db = app.firestore()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(email, name, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    addTel(tel) {
        if (!this.auth.currentUser) {
            return alert('No authorized')
        }
        return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
            tel
        })
    }

    // addBank(bank) {
    //     if (!this.auth.currentUser) {
    //         return alert('No authorized')
    //     }
    //     return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
    //         bank
    //     })
    // }

    // addAccountNum(accountNum) {
    //     if (!this.auth.currentUser) {
    //         return alert('No authorized')
    //     }
    //     return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
    //         accountNum
    //     })
    // }


    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName 
    }

    async getCurrentUserTel() {
        const tel = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
        return tel.get('tel')
    }

    // async getCurrentUserBank() {
    //     const bank = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
    //     return bank.get('bank')
    // }

    // async getCurrentUserAccountNum() {
    //     const accountNum = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
    //     return accountNum.get('accountNum')
    // }

}

export default new Firebase()