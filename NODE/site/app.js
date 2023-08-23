const firebaseConfig = {
  apiKey: "AIzaSyBoQxe8p4l34fR_Z_Mpemr_GGalGlB4VKg",
  authDomain: "projeto3miateste-a3e6f.firebaseapp.com",
  projectId: "projeto3miateste-a3e6f",
  storageBucket: "projeto3miateste-a3e6f.appspot.com",
  messagingSenderId: "181039619102",
  appId: "1:181039619102:web:91fd9b0ec5f87d15aba20f"
};

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});
