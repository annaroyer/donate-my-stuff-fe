const firebase = require('firebase/app')
require('firebase/auth')

const config = {
  apiKey: "AIzaSyCnR9jW53w2TD0Hij8zgt0j3vHfihKxwDA",
  authDomain: "donate-my-stuff.firebaseapp.com",
  databaseURL: "https://donate-my-stuff.firebaseio.com",
  projectId: "donate-my-stuff",
  storageBucket: "donate-my-stuff.appspot.com",
  messagingSenderId: "481539298605"
}

firebase.initializeApp(config)
//
// const provider = new firebase.auth.GoogleAuthProvider()
// provider.addScope('profile')
// provider.addScope('email')
//
// function toggleSignIn(){
//   if(firebase.auth().currentUser){
//     firebase.auth().signOut()
//     .then(() => {
//       document.getElementById('nav-login').textContent = 'login'
//       let joinLink = document.getElementById('nav-join')
//       joinLink.textContent = 'join'
//       joinLink.setAttribute('href', '#userRegistration')
//     })
//   } else {
//     firebase.auth().signInWithPopup(provider)
//     .then(result => {
//       const token = result.credential.accessToken
//       const user = result.user
//     })
//     .catch(error => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       const email = error.email
//       const credential = error.credential
//     })
//   }
// }
//
//
//   firebase.auth().onAuthStateChanged(user => {
//     if(user) {
//       const name = user.displayName
//       const email = user.email
//       document.getElementById('nav-login').textContent = 'logout'
//       let joinLink = document.getElementById('nav-join')
//       joinLink.textContent = 'dashboard'
//       joinLink.setAttribute('href', 'organization-dashboard.html')
//       window.sessionStorage.setItem('organization_id', 1)
//     } else {
//       document.getElementById('nav-login').textContent = 'login'
//       let joinLink = document.getElementById('nav-join')
//       joinLink.textContent = 'join'
//       joinLink.setAttribute('href', '#userRegistration')
//     }
//   })
//
//
//
// document.getElementById('nav-login')
// .addEventListener('click', toggleSignIn(), false)
