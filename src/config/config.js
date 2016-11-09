import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAGV9bfBBTjKiXCYQHxfQ8tj-HJsMAxEK8",
  authDomain: "est-auth-3aca2.firebaseapp.com",
  databaseURL: "https://test-auth-3aca2.firebaseio.com/",
  storageBucket: "gs://test-auth-3aca2.appspot.com"
};
let app = firebase.initializeApp(firebaseConfig);
export default app;