// Configuración del menú de unidades
document.addEventListener('DOMContentLoaded', () => {
    const menuUnidades = document.getElementById('menu-unidades');
    const submenuUnidades = document.getElementById('submenu-unidades');
    
    if (menuUnidades && submenuUnidades) {
        // Mostrar/ocultar submenú de unidades
        menuUnidades.addEventListener('click', (e) => {
            // Solo prevenir el comportamiento por defecto si se hace clic en el botón del menú
            if (e.target === menuUnidades || e.target.closest('#menu-unidades')) {
                e.preventDefault();
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
            }
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!submenuUnidades.contains(e.target) && !menuUnidades.contains(e.target)) {
                submenuUnidades.classList.add('hidden');
                const icon = menuUnidades.querySelector('.fa-chevron-down');
                if (icon) icon.classList.remove('rotate-180');
            }
        });
        
        // Prevenir que el clic en el menú se propague al documento
        submenuUnidades.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Si se hace clic en un enlace con #, prevenir el comportamiento por defecto
            if (e.target.closest('a[href="#"]')) {
                e.preventDefault();
                const item = e.target.closest('.unidad-item');
                if (item) {
                    const unidadIndex = parseInt(item.dataset.unidad);
                    if (typeof loadUnit === 'function') {
                        loadUnit(unidadIndex);
                    }
                }
            }
            // Los enlaces con href válido navegarán normalmente
        });
    }
});
