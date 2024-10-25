// src/components/AdminPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

export default function AdminPage() {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para manejar el logout y redirigir al login
  const handleLogout = () => {
    navigate('/'); // Redirige a la página principal (login)
  };

  // Función para abrir la cámara
  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.getElementById('video');
      video.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <div>
      <nav>
        <div>
          <button onClick={handleLogout} className="logout-button"> {/* Añade onClick aquí */}
            Log out
          </button>
        </div>
      </nav>
      <div className="camera-container">
        <h1 className="admin-h1">Admin Dashboard</h1>
        <p className="admin-p">Click the button below to open the camera:</p>
        <button id="openCameraButton" className="camera-button" onClick={handleOpenCamera}>
          Open Camera
        </button>
        <div id="videoContainer" className="video-container">
          <video id="video" autoPlay></video>
        </div>
      </div>
    </div>
  );
}
