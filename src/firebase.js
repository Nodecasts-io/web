import firebase from 'firebase'

const fb = firebase.initializeApp({
  apiKey: 'AIzaSyAINjriF5nsBLJVzRSwd9RGkXxjc_kcwlg',
  authDomain: 'nodecasts-a9904.firebaseapp.com',
  databaseURL: 'https://nodecasts-a9904.firebaseio.com',
  storageBucket: 'nodecasts-a9904.appspot.com',
  messagingSenderId: '679261507638'
})

export default fb
