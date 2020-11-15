import firebase from 'firebase'
var firebaseConfig={
  apiKey: "AIzaSyCGgJm5mnCvAxtPfoMr_hnTFcep6EPSfwk",
    authDomain: "films2-37b1f.firebaseapp.com",
    databaseURL: "https://films2-37b1f.firebaseio.com",
    projectId: "films2-37b1f",
    storageBucket: "films2-37b1f.appspot.com",
    messagingSenderId: "760292797576",
    appId: "1:760292797576:web:fe2b9a328ded8c4054833d"
}
const fire=firebase.initializeApp(firebaseConfig)
export default fire