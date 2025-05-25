// Datos del libro
const bookData = {
    unidades: [
        {
            id: 'unidad1',
            titulo: 'Unidad 1: Introducción a las Redes de Computadoras',
            descripcion: 'Conceptos básicos, clasificación de redes, modelos de referencia OSI y TCP/IP, encapsulamiento de datos.',
            duracion: '6-8 horas',
            disponible: true,
            contenido: ''
        }
    ]
};

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
    
    // Cargar la página de inicio
    loadHomePage();
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

// Inicializar la aplicación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Cargar la página de inicio
function loadHomePage() {
    console.log('Cargando página de inicio...');
    
    const mainContent = document.getElementById('main-content');
    
    // Verificar si el elemento main-content existe
    if (!mainContent) {
        console.error('No se encontró el elemento main-content');
        return;
    }
    
    try {
        // Mostrar el contenido principal
        mainContent.style.display = 'block';
        
        // Actualizar el contenido
        mainContent.innerHTML = `
            <!-- Header -->
            <div class="flex flex-col lg:flex-row justify-between items-center mb-8">
                <h1 class="text-3xl font-bold text-gray-800 mb-2 lg:mb-0">Redes de Computadoras</h1>
                <div class="flex items-center">
                    <div class="mr-6">
                        <span class="text-sm text-gray-600">Tu progreso:</span>
                        <div class="progress-bar mt-1">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                    <div class="bg-white p-2 rounded-full shadow-lg">
                        <i class="fas fa-user text-blue-900"></i>
                    </div>
                </div>
            </div>

            <!-- Welcome Section -->
            <div class="bg-white rounded-xl shadow-md p-6 mb-8">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="w-full mb-6 md:mb-0">
                        <h2 class="text-2xl font-semibold mb-4 text-blue-900">¡Bienvenido al Libro Digital Interactivo!</h2>
                        <p class="text-gray-600 mb-4">
                            Esta guía está diseñada como un material de apoyo estructurado para la asignatura Redes de Computadoras, perteneciente a la Carrera de Computación de la ESPAM MFL. Tiene como propósito facilitar el aprendizaje autónomo y acompañado, integrando principios teóricos, ejemplos contextualizados, actividades prácticas y el uso de simuladores.
                        </p>
                        <p class="text-gray-600 mb-6">
                            El enfoque es práctico-profesionalizante, alineado al perfil de egreso del ingeniero en Computación, e incorpora metodologías activas como el Aprendizaje Basado en Problemas (ABP), clase invertida y talleres con Cisco Packet Tracer.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <button id="start-journey" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                                <i class="fas fa-play-circle mr-2"></i>
                                Comenzar recorrido
                            </button>
                            <a href="informacion.html" class="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                                <i class="fas fa-info-circle mr-2"></i>
                                Más información
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Sección del video (inicialmente oculta) -->
            <div id="video-section" class="hidden mt-8">
                <div class="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto">
                    <div class="w-full h-96 rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
                        <p class="text-gray-500">Cargando video...</p>
                    </div>
                </div>
            </div>
        `;
        
        console.log('Página de inicio cargada correctamente');
    } catch (error) {
        console.error('Error al cargar la página de inicio:', error);
    }
}

// Función para mostrar el video de YouTube
function showVideo() {
    console.log('Función showVideo ejecutada');
    
    const videoSection = document.getElementById('video-section');
    const mainContent = document.getElementById('main-content');
    
    if (!videoSection || !mainContent) {
        console.error('No se encontró videoSection o mainContent');
        return;
    }
    
    try {
        // Ocultar el contenido principal
        mainContent.style.display = 'none';
        
        // Limpiar cualquier contenido existente en la sección de video
        videoSection.innerHTML = `
            <div class="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto">
                <iframe 
                    id="youtube-video"
                    class="w-full h-96 rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/alkQaRYmMiA?autoplay=1&rel=0"
                    title="Video de introducción a Redes de Computadoras"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="mt-4 text-center">
                <button id="back-to-home" class="text-blue-600 hover:text-blue-800 font-medium flex items-center mx-auto">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Volver al inicio
                </button>
            </div>
        `;
        
        // Mostrar la sección del video
        videoSection.classList.remove('hidden');
        
        // Configurar el evento para el botón de volver
        const backButton = document.getElementById('back-to-home');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                backToHome();
            });
        }
        
        // Desplazarse a la sección del video
        videoSection.scrollIntoView({ behavior: 'smooth' });
        
        console.log('Video mostrado correctamente');
    } catch (error) {
        console.error('Error al mostrar el video:', error);
    }
}

// Función para volver a la página de inicio
function backToHome() {
    const mainContent = document.getElementById('main-content');
    const videoSection = document.getElementById('video-section');
    
    if (!mainContent || !videoSection) return;
    
    try {
        // Mostrar el contenido principal
        mainContent.style.display = 'block';
        
        // Ocultar la sección del video
        videoSection.classList.add('hidden');
        
        // Desplazarse al inicio de la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('Volviendo a la página de inicio');
    } catch (error) {
        console.error('Error al volver al inicio:', error);
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

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Aquí iría la lógica para mostrar notificaciones en la interfaz
}
