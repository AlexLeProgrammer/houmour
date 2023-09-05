/*
* @author Arsène Brosy
* @version 0.0.1
* @date 2023-09-04
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBi-DzM_KntEiXNnnQRitLgfaLIahmAd1s",
authDomain: "humour-site.firebaseapp.com",
databaseURL: "https://humour-site-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "humour-site",
storageBucket: "humour-site.appspot.com",
messagingSenderId: "1080637828385",
appId: "1:1080637828385:web:24388eae6553165d5a2260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);