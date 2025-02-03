//<!-- assignment module 13 -->
// localStorage, sessionStorage example

function showForm(type){
	console.log("clicked button :", type);
	if (type === 'sign-up'){ // ===
		document.getElementById('sign-in').classList.add('d-none');
		document.getElementById('sign-up').classList.remove('d-none');		
	} else if (type === 'sign-in') {		
		document.getElementById('sign-up').classList.add('d-none');
		document.getElementById('sign-in').classList.remove('d-none');
	}
}

function register() { // sign-up
	const name = document.getElementById('reg-name').value;
	const email = document.getElementById('reg-email').value;
	const password = document.getElementById('reg-password').value;
	const password2 = document.getElementById('reg-password2').value;

	if (!name) {
		alert("Name is required!");
		return;
	}
	if (!email) {
		alert("Email is required!");
		return;
	}
	if (!password) {
		alert("Password is required!");
		return;
	}
	if(!password2){
		alert("Confirmation Password is required!");
		return;
	}
	if(password != password2){
		alert("Passwords didn't match. try again");
		return;
	}
	// alternate idea: instead of alert box, show warning in form input. -----

	const user = { name, email, password };
	console.log(user); // {name: 'Anup', email: 'anup@example.com', password: '123'} // as map
	const jsonUser = JSON.stringify(user); // ---------- stringify
	localStorage.setItem(email, jsonUser); // setItem() <--- save  // in chrome see saved in, inspect > application > local storage.
	// localStorage.removeItem(key); // clear 1 item
	// localStorage.clear(); // clear all

	alert("Registration successfull!! You can login now")
	// clear form inputs
	document.getElementById('reg-name').value ='';
	document.getElementById('reg-email').value ='';
	document.getElementById('reg-password').value = '';
	document.getElementById('reg-password2').value = '';

	showForm('sign-in');
}

function login() { // sign-in
	const email = document.getElementById('login-email').value;
	const inputPassword = document.getElementById('login-password').value;	
	if (!email) {
		alert("Email is required!");
		return;
	}
	if (!inputPassword) {
		alert("Password is required!");
	}	
	const user = localStorage.getItem(email);
	console.log("current user is", user);
	if (!user) {
		alert("User was not found in Database!");
		return;
	}	
	const parsedUser = JSON.parse(user); // ---------- parse
	if (inputPassword != parsedUser.password) {
		alert("Incorrect Password");
		return;
	}	
	console.log("saving user-name:", parsedUser.name); // not user.name !
	sessionStorage.setItem('show-user-name-as', parsedUser.name); // sessionStorage ----------
	alert("Login Successfull! Welcome " + parsedUser.name);
	document.getElementById('login-email').value = '';
	document.getElementById('login-password').value = '';	
	window.location.href = "homepage.html";
	//document.getElementById("user-name-greeting").innerText = parsedUser.name;
}

//--------------------------------------------------------
function goLoginRegisterPage(){
	window.location.href = "index.html";
}
