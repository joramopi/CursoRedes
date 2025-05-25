// Función para manejar la navegación por pestañas
function initTabs() {
    console.log('Inicializando pestañas...');
    
    // Obtener todos los botones de pestaña
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length === 0) {
        console.warn('No se encontraron botones de pestaña');
        return;
    }
    
    // Función para cambiar de pestaña
    function switchTab(button) {
        if (!button) return;
        
        const tabId = button.getAttribute('data-tab');
        if (!tabId) {
            console.warn('Botón de pestaña sin data-tab:', button);
            return;
        }
        
        console.log('Cambiando a pestaña:', tabId);
        
        // Remover la clase 'active' de todos los botones
        tabButtons.forEach(btn => {
            btn.classList.remove('active', 'border-blue-500', 'text-blue-600');
            btn.classList.add('border-transparent', 'text-gray-500');
        });
        
        // Ocultar todos los paneles
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.add('hidden');
        });
        
        // Añadir clase 'active' al botón clickeado
        button.classList.add('active', 'border-blue-500', 'text-blue-600');
        button.classList.remove('border-transparent', 'text-gray-500');
        
        // Mostrar el panel correspondiente
        const targetPane = document.getElementById(tabId);
        if (targetPane) {
            console.log('Mostrando panel:', tabId);
            targetPane.classList.remove('hidden');
        } else {
            console.warn('No se encontró el panel:', tabId);
        }
    }
    
    // Añadir evento de clic a cada botón de pestaña
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Botón clickeado:', this);
            switchTab(this);
            return false;
        });
    });

    // Activar la primera pestaña por defecto
    const activeTab = document.querySelector('.tab-button.active') || tabButtons[0];
    console.log('Pestaña activa inicial:', activeTab);
    switchTab(activeTab);
}

// Inicializar pestañas cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
} else {
    initTabs();
}
