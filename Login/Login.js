const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');
const errorMessage = document.getElementById('error-message');

// Creamos un objeto para almacenar los usuarios registrados
const registeredUsers = [];

// Función para mostrar una alerta cuando un usuario se registra
function showAlertOnRegistration(username) {
    alert(`¡Registro exitoso :D! Bienvenido, ${username} 🥳`);
}

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    errorMessage.textContent = ''; // Limpiamos cualquier mensaje de error
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    errorMessage.textContent = ''; // Limpiamos cualquier mensaje de error
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe

    // Obtenemos los valores ingresados en el formulario de registro
    const nameInput = signUpForm.querySelector('input[placeholder="Nombre"]');
    const emailInput = signUpForm.querySelector('input[placeholder="Email"]');
    const passwordInput = signUpForm.querySelector('input[placeholder="Password"]');

    // Validamos que los campos no estén vacíos
    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
        errorMessage.textContent = 'Por favor, complete todos los campos.';
    } else {
        // Guardamos el usuario registrado en el objeto y mostramos la alerta
        registeredUsers.push({
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        });
        showAlertOnRegistration(nameInput.value);
        // Limpiamos los campos del formulario
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        
    }
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe

    // Obtenemos los valores ingresados en el formulario de inicio de sesión
    const emailInput = signInForm.querySelector('input[placeholder="Email"]');
    const passwordInput = signInForm.querySelector('input[placeholder="Password"]');

    // Buscamos al usuario en el objeto de usuarios registrados
    const user = registeredUsers.find((u) => u.email === emailInput.value && u.password === passwordInput.value);

    if (user) {
        // Usuario encontrado, permitir acceso a la siguiente página o realizar otras acciones
        alert(`¡Bienvenido de nuevo :D, ${user.name}!`);
        window.location.href = '/Menu/menu.html';

    } else {
        // Usuario no encontrado, mostrar mensaje de error
        errorMessage.textContent = '¿Quien eres tu? Tu no eres uno de mis usaurario😑🤔';
    }
});


function loginUser(){
    alert("a")
}