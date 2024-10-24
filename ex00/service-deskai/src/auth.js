let selectedUserType = ''; // Variable para almacenar el tipo de usuario seleccionado

// Función para establecer el tipo de usuario seleccionado
function setUserType(userType) {
    selectedUserType = userType; // Guardar el tipo de usuario
}

// Manejar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío del formulario por defecto

    const email = document.getElementById('email').value; // Obtener el correo electrónico
    const password = document.getElementById('password').value; // Obtener la contraseña

    // Simulación de validación de credenciales
    // Aquí deberías realizar una solicitud a tu API para validar las credenciales
    if (validateCredentials(email, password, selectedUserType)) {
        // Redirigir según el tipo de usuario
        redirectToPage(selectedUserType);
    } else {
        alert('Credenciales inválidas. Por favor intenta de nuevo.'); // Mensaje de error
    }
});

// Función para validar las credenciales (simulación)
function validateCredentials(email, password, userType) {
    // Aquí puedes definir tus credenciales válidas para la simulación
    const validCredentials = {
        standard: { email: 'standard@example.com', password: 'standard' },
        serviceDesk: { email: 'servicedesk@example.com', password: 'service' },
        admin: { email: 'admin@example.com', password: 'admin' },
    };

    // Verifica si las credenciales coinciden
    return (
        validCredentials[userType] &&
        validCredentials[userType].email === email &&
        validCredentials[userType].password === password
    );
}

// Función para redirigir a la página correspondiente según el tipo de usuario
function redirectToPage(userType) {
    switch (userType) {
        case 'standard':
            window.location.href = 'standard.html'; // Redirigir a la página del usuario estándar
            break;
        case 'serviceDesk':
            window.location.href = 'serviceDesk.html'; // Redirigir a la página del servicio de atención
            break;
        case 'admin':
            window.location.href = 'admin.html'; // Redirigir a la página del administrador
            break;
        default:
            alert('Please select an user type.'); // Mensaje de error si no hay tipo seleccionado
    }
}
