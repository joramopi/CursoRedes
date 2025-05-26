// Configuración de menús desplegables
function setupDropdownMenu(menuId, submenuId) {
    const menu = document.getElementById(menuId);
    const submenu = document.getElementById(submenuId);
    
    if (!menu || !submenu) return;

    // Mostrar/ocultar submenú
    menu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isHidden = submenu.classList.toggle('hidden');
        
        // Rotar el ícono de la flecha
        const icon = menu.querySelector('.fa-chevron-down');
        if (icon) {
            if (isHidden) {
                icon.classList.remove('rotate-180');
            } else {
                icon.classList.add('rotate-180');
            }
        }
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!submenu.contains(e.target) && !menu.contains(e.target)) {
            submenu.classList.add('hidden');
            const icon = menu.querySelector('.fa-chevron-down');
            if (icon) icon.classList.remove('rotate-180');
        }
    });
}

// Configuración del menú de unidades
document.addEventListener('DOMContentLoaded', function() {
    // Configurar menú de unidades
    setupDropdownMenu('menu-unidades', 'submenu-unidades');
    
    // Configurar menú de evaluaciones
    setupDropdownMenu('menu-evaluaciones', 'submenu-evaluaciones');
    
    // Manejar clics en los enlaces del menú de unidades
    const submenuUnidades = document.getElementById('submenu-unidades');
    if (submenuUnidades) {
        submenuUnidades.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            
            if (link) {
                // Si es un enlace con #, prevenir la navegación y cargar el contenido
                if (link.getAttribute('href') === '#') {
                    e.preventDefault();
                    const item = link.closest('.unidad-item');
                    if (item) {
                        const unidadIndex = parseInt(item.dataset.unidad);
                        if (typeof loadUnit === 'function') {
                            loadUnit(unidadIndex);
                        }
                    }
                }
                // Para enlaces con href válido, permitir la navegación normal
            }
            
            // Cerrar el menú después de hacer clic en un enlace
            submenuUnidades.classList.add('hidden');
            const icon = document.querySelector('#menu-unidades .fa-chevron-down');
            if (icon) icon.classList.remove('rotate-180');
        });
    }
});
