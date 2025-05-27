// Variables globales
let currentUnitIndex = 0; // Se mantiene, aunque su uso directo para la UI de colores cambia

// Función para aplicar los colores del sidebar y el estado activo del menú
function applySidebarColorsAndActiveState() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) {
        console.error('Sidebar element not found.');
        return;
    }

    const path = window.location.pathname; // Obtiene la ruta actual de la URL
    let unitClass = '';
    let activeLinkSelector = ''; // Selector CSS para el elemento de menú activo

    // Determinar la clase del sidebar y el selector del enlace activo
    if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
        unitClass = 'sidebar-principal';
        activeLinkSelector = 'a[href="index.html"]';
    } else if (path.includes('UT1.html')) {
        unitClass = 'sidebar-ut1';
        activeLinkSelector = 'a[href="UT1.html"]'; // El enlace real de UT1
    } else if (path.includes('UT2.html')) {
        unitClass = 'sidebar-ut2';
        // Asegúrate de que este selector apunte al enlace correcto de UT2 en tu HTML
        // Si UT2.html existe, sería 'a[href="UT2.html"]'
        // Si sigue siendo un placeholder como el HTML original, usa data-unidad
        activeLinkSelector = 'a[data-unidad="1"]';
    } else if (path.includes('UT3.html')) {
        unitClass = 'sidebar-ut3';
        activeLinkSelector = 'a[data-unidad="2"]';
    } else if (path.includes('UT4.html')) {
        unitClass = 'sidebar-ut4';
        activeLinkSelector = 'a[data-unidad="3"]';
    } else {
        // Por defecto, si no se encuentra ninguna unidad específica
        unitClass = 'sidebar-principal';
        activeLinkSelector = 'a[href="index.html"]';
    }

    // Remover cualquier clase de color de sidebar existente antes de añadir la nueva
    const allSidebarClasses = ['sidebar-principal', 'sidebar-ut1', 'sidebar-ut2', 'sidebar-ut3', 'sidebar-ut4'];
    allSidebarClasses.forEach(cls => {
        sidebar.classList.remove(cls);
    });

    // Añadir la clase de la unidad determinada al sidebar
    if (unitClass) {
        sidebar.classList.add(unitClass);
    }

    // --- Manejo del resaltado del elemento de menú activo ---
    // Primero, remover cualquier estado activo actual (bg-blue-700)
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('bg-blue-700');
    });
    document.querySelectorAll('#submenu-unidades a').forEach(item => {
        item.classList.remove('bg-blue-700');
    });

    // Luego, añadir el estado activo al enlace de la página actual
    if (activeLinkSelector) {
        const currentActiveLink = document.querySelector(activeLinkSelector);
        if (currentActiveLink) {
            currentActiveLink.classList.add('bg-blue-700'); // Aplica la clase activa de Tailwind
            
            // Si el enlace activo está dentro del submenú de "Unidades",
            // asegúrate de que el menú principal "Unidades" también esté activo
            // y que el submenú esté abierto.
            if (currentActiveLink.closest('#submenu-unidades')) {
                const menuUnidades = document.getElementById('menu-unidades');
                const submenuUnidades = document.getElementById('submenu-unidades');
                
                if (menuUnidades) {
                    menuUnidades.classList.add('bg-blue-700'); // Activa el menú principal "Unidades"
                    const chevronIcon = menuUnidades.querySelector('.fa-chevron-down');
                    if (chevronIcon) {
                        chevronIcon.classList.add('rotate-180'); // Gira la flecha
                    }
                }
                
                if (submenuUnidades && submenuUnidades.classList.contains('hidden')) {
                    submenuUnidades.classList.remove('hidden'); // Muestra el submenú
                }
            }
        }
    }
}


// Inicialización
function initApp() {
    // Configurar eventos de navegación (mantener tu función existente)
    setupNavigation();
    
    // Iniciar animación de la barra de progreso (mantener tu función existente)
    startProgressAnimation();
    
    // Configurar manejadores de eventos (mantener tu función existente)
    setupEventListeners();

    // NUEVO: Aplicar los colores y el estado activo del sidebar al cargar la página
    applySidebarColorsAndActiveState();
}

// Configurar todos los manejadores de eventos
function setupEventListeners() {
    // Menú de inicio
    document.addEventListener('click', function(e) {
        // Menú de unidades
        if (e.target.closest('#menu-unidades')) {
            e.preventDefault();
            const submenu = document.getElementById('submenu-unidades');
            const chevronIcon = e.target.closest('#menu-unidades').querySelector('.fa-chevron-down');
            
            if (submenu) {
                submenu.classList.toggle('hidden');
                // Gira la flecha solo si el submenú se abre o cierra por interacción del usuario
                if (chevronIcon) {
                    chevronIcon.classList.toggle('rotate-180');
                }
            }
            e.stopPropagation(); // Evita que el clic se propague al document y cierre el menú
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
        // Importante: No cerrar si un item de unidad activa previamente lo abrió
        // La lógica de applySidebarColorsAndActiveState ya lo abre si es la unidad actual
        if (!e.target.closest('#menu-unidades') && !e.target.closest('#submenu-unidades')) {
            const submenu = document.getElementById('submenu-unidades');
            // Solo cerrar si está abierto Y no estamos en una página de unidad que lo requiere abierto
            if (submenu && !submenu.classList.contains('hidden')) {
                // Aquí podrías añadir una condición más compleja si quieres que permanezca abierto
                // por ejemplo, si la URL actual es una de las unidades.
                // Sin embargo, el toggle simple ya funciona para la interacción de usuario.
                submenu.classList.add('hidden');
                const menuUnidades = document.getElementById('menu-unidades');
                if (menuUnidades) {
                    const chevronIcon = menuUnidades.querySelector('.fa-chevron-down');
                    if (chevronIcon && chevronIcon.classList.contains('rotate-180')) {
                        chevronIcon.classList.remove('rotate-180');
                    }
                }
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
            // Remover el listener anterior para evitar duplicados si la función se llama varias veces
            const oldClickListener = backButton.onclick; // Guardar referencia si existe
            if (oldClickListener) {
                backButton.removeEventListener('click', oldClickListener);
            }
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

// Configurar la navegación entre unidades (función placeholder)
function setupNavigation() {
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