// Selecciona los elementos del DOM
const openCameraButton = document.getElementById('openCameraButton');
const video = document.getElementById('video');

// Función para abrir la cámara
openCameraButton.addEventListener('click', async () => {
    try {
        // Solicita acceso a la cámara
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream; // Asigna el stream al elemento video
    } catch (error) {
        console.error("Error accessing the camera:", error);
        alert("Could not access the camera. Please check your permissions.");
    }
});

// Manejo del botón de log out
document.getElementById('logoutButton').addEventListener('click', () => {
    // Aquí podrías añadir la lógica para cerrar sesión (ej. eliminar tokens, redirigir a login)
    alert("Logged out successfully!"); // Ejemplo simple
});
