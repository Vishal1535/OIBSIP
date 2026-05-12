// script.js

const loginBtn = document.getElementById('loginBtn');

const registerBtn = document.getElementById('registerBtn');

const loginForm = document.getElementById('loginForm');

const registerForm = document.getElementById('registerForm');

const message = document.getElementById('message');


// =======================
// TAB SWITCHING
// =======================

loginBtn.addEventListener('click',()=>{

  loginForm.classList.remove('hidden');

  registerForm.classList.add('hidden');

  loginBtn.classList.add('active');

  registerBtn.classList.remove('active');

  message.innerText = '';
});

registerBtn.addEventListener('click',()=>{

  registerForm.classList.remove('hidden');

  loginForm.classList.add('hidden');

  registerBtn.classList.add('active');

  loginBtn.classList.remove('active');

  message.innerText = '';
});


// =======================
// SHOW PASSWORD
// =======================

function togglePassword(id,icon){

  const input = document.getElementById(id);

  if(input.type === 'password'){

    input.type = 'text';

    icon.innerText = '🙈';
  }

  else{

    input.type = 'password';

    icon.innerText = '👁️';
  }

}


// =======================
// REGISTER USER
// =======================

registerForm.addEventListener('submit',(e)=>{

  e.preventDefault();

  const name = document
  .getElementById('registerName')
  .value
  .trim();

  const email = document
  .getElementById('registerEmail')
  .value
  .trim();

  const password = document
  .getElementById('registerPassword')
  .value
  .trim();

  if(name === '' || email === '' || password === ''){

    message.innerText = 'Please fill all fields ❌';

    message.className = 'error';

    return;
  }

  // Check Existing User

  const existingUser = JSON.parse(
    localStorage.getItem('user')
  );

  if(existingUser && existingUser.email === email){

    message.innerText = 'User already exists ❌';

    message.className = 'error';

    return;
  }

  // Save User

  const user = {

    name:name,

    email:email,

    password:password
  };

  localStorage.setItem(
    'user',
    JSON.stringify(user)
  );

  message.innerText = 'Registration Successful ✅';

  message.className = 'success';

  registerForm.reset();

});


// =======================
// LOGIN USER
// =======================

loginForm.addEventListener('submit',(e)=>{

  e.preventDefault();

  const email = document
  .getElementById('loginEmail')
  .value
  .trim();

  const password = document
  .getElementById('loginPassword')
  .value
  .trim();

  const storedUser = JSON.parse(
    localStorage.getItem('user')
  );

  // No Registered User

  if(storedUser === null){

    message.innerText = 'Please register first ❌';

    message.className = 'error';

    return;
  }

  // Correct Login

  if(

    email === storedUser.email &&

    password === storedUser.password

  ){

    message.innerText = `Welcome ${storedUser.name} ✅`;

    message.className = 'success';

    loginForm.reset();

  }

  // Wrong Credentials

  else{

    message.innerText = 'Invalid Email or Password ❌';

    message.className = 'error';
  }

});