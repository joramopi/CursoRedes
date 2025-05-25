// Configuración del menú de unidades
document.addEventListener('DOMContentLoaded', function() {
    const menuUnidades = document.getElementById('menu-unidades');
    const submenuUnidades = document.getElementById('submenu-unidades');
    
    if (!menuUnidades || !submenuUnidades) return;

    // Mostrar/ocultar submenú de unidades
    menuUnidades.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isHidden = submenuUnidades.classList.toggle('hidden');
        
        // Rotar el ícono de la flecha
        const icon = menuUnidades.querySelector('.fa-chevron-down');
        if (icon) {
            if (isHidden) {
                icon.classList.remove('rotate-180');
            } else {
                icon.classList.add('rotate-180');
            }
        }
    });
    
    // Manejar clics en los enlaces del menú
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
        const icon = menuUnidades.querySelector('.fa-chevron-down');
        if (icon) icon.classList.remove('rotate-180');
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!submenuUnidades.contains(e.target) && !menuUnidades.contains(e.target)) {
            submenuUnidades.classList.add('hidden');
            const icon = menuUnidades.querySelector('.fa-chevron-down');
            if (icon) icon.classList.remove('rotate-180');
        }
    });
});
