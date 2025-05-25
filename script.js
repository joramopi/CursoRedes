// Datos del libro
const bookData = {
    unidades: [
        {
            id: 'unidad1',
            titulo: 'Unidad 1: Introducción a las Redes de Computadoras',
            descripcion: 'Conceptos básicos, clasificación de redes, modelos de referencia OSI y TCP/IP, encapsulamiento de datos.',
            duracion: '6-8 horas',
            disponible: true,
            contenido: `
                <div class="unit-content-section">
                    <h2 class="text-2xl font-bold mb-6 text-blue-900">Introducción a las Redes de Computadoras</h2>
                    
                    <div class="mb-8">
                        <h3 class="text-xl font-semibold mb-4 text-gray-800">¿Qué son las redes de computadoras?</h3>
                        <p class="text-gray-700 mb-4">Una red de computadoras es un conjunto de dispositivos interconectados que comparten recursos e información a través de medios de transmisión físicos o inalámbricos.</p>
                        
                        <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                            <h4 class="font-semibold text-blue-800 mb-2">Objetivos principales</h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Compartir recursos (impresoras, archivos, aplicaciones)</li>
                                <li>Facilitar la comunicación entre usuarios</li>
                                <li>Compartir información de forma rápida y eficiente</li>
                                <li>Acceso remoto a sistemas y servicios</li>
                                <li>Reducción de costos mediante el uso compartido</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 class="text-lg font-semibold mb-3 text-blue-800">Componentes básicos</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-desktop text-blue-500 mt-1 mr-2"></i>
                                    <span>Dispositivos finales (PCs, servidores, impresoras)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-network-wired text-blue-500 mt-1 mr-2"></i>
                                    <span>Dispositivos de red (routers, switches, hubs)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-plug text-blue-500 mt-1 mr-2"></i>
                                    <span>Medios de transmisión (cableado, inalámbrico)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-broadcast-tower text-blue-500 mt-1 mr-2"></i>
                                    <span>Protocolos de comunicación</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-lg border border-gray-200">
                            <h3 class="text-lg font-semibold mb-3 text-blue-800">Ventajas de las redes</h3>
                            <ul class="space-y-2">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Comunicación rápida y eficiente</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Uso compartido de recursos</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Acceso a información remota</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Colaboración entre usuarios</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Reducción de costos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r mb-8">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <i class="fas fa-lightbulb text-yellow-500 text-xl"></i>
                            </div>
                            <div class="ml-3">
                                <h4 class="text-yellow-800 font-medium">Dato interesante</h4>
                                <p class="text-yellow-700 text-sm mt-1">La primera red de computadoras, ARPANET, se creó en 1969 y es considerada la precursora de Internet moderno.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
                        <button class="btn btn-outline flex items-center">
                            <i class="fas fa-arrow-left mr-2"></i> Anterior
                        </button>
                        <div class="text-sm text-gray-500">1 de 6</div>
                        <button class="btn btn-primary flex items-center">
                            Siguiente <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            `
        },
        // ... (más unidades)
    ]
};

// Variables globales
let currentUnitIndex = 0;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Cargar la página de inicio
    loadHomePage();
    
    // Configurar eventos de navegación
    setupNavigation();
    
    // Iniciar animación de la barra de progreso
    startProgressAnimation();
});

// Cargar la página de inicio
function loadHomePage() {
    const mainContent = document.getElementById('main-content');
    
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
                <div class="md:w-2/3 mb-6 md:mb-0 md:pr-6">
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
                        <button class="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                            <i class="fas fa-info-circle mr-2"></i>
                            Más información
                        </button>
                    </div>
                </div>
                <div class="md:w-1/3 flex justify-center">
                    <div class="bg-blue-100 p-6 rounded-lg">
                        <i class="fas fa-network-wired text-8xl text-blue-600"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Professor Info Section -->
        <div class="bg-white rounded-xl shadow-md p-6 mb-8">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/4 flex justify-center mb-6 md:mb-0">
                    <div class="rounded-full w-40 h-40 overflow-hidden bg-gray-200 flex items-center justify-center avatar">
                        <i class="fas fa-user-tie text-6xl text-gray-400"></i>
                    </div>
                </div>
                <div class="md:w-3/4 md:pl-6">
                    <h2 class="text-2xl font-semibold mb-2 text-blue-900">Docente: Mgtr. Joffre Moreira Pico</h2>
                    <p class="mb-1 text-gray-700"><i class="fas fa-briefcase mr-2 text-blue-600"></i> Director de la Carrera de Computación - ESPAM MFL</p>
                    <p class="mb-1 text-gray-700"><i class="fas fa-users mr-2 text-blue-600"></i> Grupo de investigación SISCOM</p>
                    <p class="mb-1 text-gray-700"><i class="fas fa-award mr-2 text-blue-600"></i> Investigador SENESCYT: REG-INV-18-02646</p>
                    <p class="mb-4 text-gray-700"><i class="fas fa-graduation-cap mr-2 text-blue-600"></i> Docente Titular [Tiempo completo]</p>
                    
                    <div class="flex flex-wrap gap-3">
                        <a href="mailto:jmoreira@espam.edu.ec" class="flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                            <i class="fas fa-envelope mr-2 text-blue-600"></i>
                            jmoreira@espam.edu.ec
                        </a>
                        <a href="tel:+593959143015" class="flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                            <i class="fas fa-phone mr-2 text-blue-600"></i>
                            +593 959143015
                        </a>
                        <a href="https://ec.linkedin.com/in/joramopi" target="_blank" class="flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
                            <i class="fab fa-linkedin mr-2 text-blue-600"></i>
                            Perfil de LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Units Section -->
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Unidades de Estudio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="units-grid">
            ${bookData.unidades.map((unidad, index) => `
                <div class="card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="unit-card bg-gradient-to-br from-blue-500 to-indigo-600">
                        <div class="unit-overlay"></div>
                        <div class="unit-content">
                            <h3 class="text-xl font-bold mb-1">${unidad.titulo.split(':')[0]}</h3>
                            <p class="text-sm text-gray-200">${unidad.titulo.split(':')[1]}</p>
                        </div>
                        <div class="absolute top-0 right-0 m-4">
                            <span class="${unidad.disponible ? 'bg-green-500' : 'bg-blue-500'} text-white text-xs px-2 py-1 rounded-full">
                                ${unidad.disponible ? 'Disponible' : 'Próximamente'}
                            </span>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="text-sm text-gray-600 mb-3">${unidad.descripcion}</p>
                        <div class="flex justify-between items-center">
                            <div class="text-xs text-gray-500">
                                <i class="fas fa-clock mr-1"></i> ${unidad.duracion}
                            </div>
                            <button class="unit-btn ${unidad.disponible ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'} text-white px-4 py-2 rounded text-sm transition-colors" 
                                    data-unit="${index}" ${unidad.disponible ? '' : 'disabled'}>
                                ${unidad.disponible ? 'Explorar' : 'No disponible'}
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Configurar eventos para los botones de las unidades
    document.querySelectorAll('.unit-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
            const unitIndex = parseInt(btn.dataset.unit);
            loadUnit(unitIndex);
        });
    });
    
    // Configurar evento para el botón de comenzar
    document.getElementById('start-journey')?.addEventListener('click', () => {
        loadUnit(0); // Cargar la primera unidad disponible
    });
}

// Cargar una unidad específica
function loadUnit(index) {
    if (index < 0 || index >= bookData.unidades.length) return;
    
    const unidad = bookData.unidades[index];
    currentUnitIndex = index;
    
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <!-- Breadcrumb -->
        <nav class="flex mb-6" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <a href="#" class="text-gray-700 hover:text-blue-600 inline-flex items-center text-sm font-medium" id="back-to-home">
                        <i class="fas fa-home mr-2"></i>
                        Inicio
                    </a>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <i class="fas fa-chevron-right text-gray-400 mx-2"></i>
                        <span class="text-gray-500 text-sm font-medium">${unidad.titulo}</span>
                    </div>
                </li>
            </ol>
        </nav>
        
        <!-- Contenido de la unidad -->
        ${unidad.contenido}
    `;
    
    // Configurar evento para volver al inicio
    document.getElementById('back-to-home')?.addEventListener('click', (e) => {
        e.preventDefault();
        loadHomePage();
    });
    
    // Configurar eventos de navegación
    setupNavigation();
}

// Configurar la navegación entre unidades
function setupNavigation() {
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            // Siguiente unidad si existe
            if (currentUnitIndex < bookData.unidades.length - 1) {
                loadUnit(currentUnitIndex + 1);
            }
        } else if (e.key === 'ArrowLeft') {
            // Unidad anterior si existe
            if (currentUnitIndex > 0) {
                loadUnit(currentUnitIndex - 1);
            }
        } else if (e.key === 'Escape') {
            // Volver al inicio
            loadHomePage();
        }
    });
}

// Iniciar animación de la barra de progreso
function startProgressAnimation() {
    setTimeout(() => {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = '75%';
        }
    }, 300);
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}