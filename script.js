// Variables globales
let currentUnitIndex = 0;

// Inicialización
function initApp() {
    // Configurar eventos de navegación
    setupNavigation();
    
    // Iniciar animación de la barra de progreso
    startProgressAnimation();
    
    // Configurar manejadores de eventos
    setupEventListeners();
}

// Configurar todos los manejadores de eventos
function setupEventListeners() {
    // Menú de inicio
    document.addEventListener('click', function(e) {
        // Menú de unidades
        if (e.target.closest('#menu-unidades')) {
            e.preventDefault();
            const submenu = document.getElementById('submenu-unidades');
            if (submenu) submenu.classList.toggle('hidden');
            e.stopPropagation();
        }
        
        // Botón de comenzar recorrido
        if (e.target.closest('#start-journey')) {
            e.preventDefault();
            showVideo();
        }
        
        // Botón de volver al inicio
        if (e.target.closest('#back-to-home')) {
            e.preventDefault();
            backToHome();
        }
        
        // Cerrar menú si se hace clic fuera de él
        if (!e.target.closest('#menu-unidades') && !e.target.closest('#submenu-unidades')) {
            const submenu = document.getElementById('submenu-unidades');
            if (submenu && !submenu.classList.contains('hidden')) {
                submenu.classList.add('hidden');
            }
        }
    });
}

// Función para mostrar el video de YouTube
function showVideo() {
    console.log('Mostrando video...');
    
    const videoSection = document.getElementById('video-section');
    const videoContainer = document.getElementById('video-container');
    
    if (!videoSection || !videoContainer) {
        console.error('No se encontró videoSection o videoContainer');
        return;
    }
    
    try {
        // Crear el iframe del video
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '500');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/alkQaRYmMiA?autoplay=1&rel=0');
        iframe.setAttribute('title', 'Video de introducción a Redes de Computadoras');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.borderRadius = '0.5rem';
        iframe.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        
        // Limpiar el contenedor y agregar el iframe
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
        
        // Mostrar la sección del video
        videoSection.classList.remove('hidden');
        
        // Desplazarse a la sección del video
        videoSection.scrollIntoView({ behavior: 'smooth' });
        
        // Configurar el evento para el botón de cerrar
        const backButton = document.getElementById('back-to-home');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                backToHome();
            });
        }
        
        console.log('Video mostrado correctamente');
    } catch (error) {
        console.error('Error al mostrar el video:', error);
    }
}

// Función para volver a la página de inicio
function backToHome() {
    const videoSection = document.getElementById('video-section');
    const videoContainer = document.getElementById('video-container');
    
    if (!videoSection || !videoContainer) return;
    
    try {
        // Detener el video limpiando el contenedor
        videoContainer.innerHTML = '';
        
        // Ocultar la sección del video
        videoSection.classList.add('hidden');
        
        console.log('Video cerrado');
    } catch (error) {
        console.error('Error al cerrar el video:', error);
    }
}

// Configurar la navegación entre unidades
function setupNavigation() {
    // Aquí iría la lógica de navegación entre unidades
    console.log('Configurando navegación...');
}

// Iniciar animación de la barra de progreso
function startProgressAnimation() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        // Simular progreso (puedes reemplazarlo con el progreso real)
        progressFill.style.width = '65%';
    }
}

// Inicializar la aplicación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
