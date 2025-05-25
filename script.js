// Datos del libro
const bookData = {
    temas: [
        {
            id: 'introduccion',
            titulo: 'Introducción a las Redes',
            contenido: `
                <h3>¿Qué son las redes de computadoras?</h3>
                <p>Una red de computadoras es un conjunto de dispositivos interconectados que comparten recursos e información a través de medios de transmisión físicos o inalámbricos.</p>
                
                <h3>Objetivos de las redes</h3>
                <ul>
                    <li>Compartir recursos (impresoras, archivos, etc.)</li>
                    <li>Facilitar la comunicación entre usuarios</li>
                    <li>Compartir información de forma rápida y eficiente</li>
                    <li>Acceso remoto a sistemas</li>
                </ul>
            `
        },
        {
            id: 'topologias',
            titulo: 'Topologías de Red',
            contenido: `
                <h3>Tipos de topologías</h3>
                <p>Las topologías de red definen la estructura física o lógica de una red de computadoras.</p>
                
                <h4>Topologías físicas:</h4>
                <ul>
                    <li>Estrella</li>
                    <li>Bus</li>
                    <li>Anillo</li>
                    <li>Malla</li>
                    <li>Árbol</li>
                    <li>Híbrida</li>
                </ul>
                
                <h4>Topologías lógicas:</h4>
                <ul>
                    <li>Broadcast</li>
                    <li>Paso de testigo</li>
                </ul>
            `
        },
        {
            id: 'modelo_osi',
            titulo: 'Modelo OSI',
            contenido: `
                <h3>Modelo de Interconexión de Sistemas Abiertos</h3>
                <p>El modelo OSI es un marco de referencia para la comunicación entre sistemas informáticos.</p>
                
                <h4>Las 7 capas del modelo OSI:</h4>
                <ol>
                    <li>Aplicación</li>
                    <li>Presentación</li>
                    <li>Sesión</li>
                    <li>Transporte</li>
                    <li>Red</li>
                    <li>Enlace de datos</li>
                    <li>Física</li>
                </ol>
                
                <p>Cada capa tiene funciones específicas y se comunica con las capas adyacentes.</p>
            `
        },
        {
            id: 'protocolos',
            titulo: 'Protocolos de Red',
            contenido: `
                <h3>Protocolos de comunicación</h3>
                <p>Los protocolos son reglas que permiten la comunicación entre dispositivos en una red.</p>
                
                <h4>Protocolos comunes:</h4>
                <ul>
                    <li><strong>TCP/IP</strong>: Protocolo de control de transmisión/Protocolo de Internet</li>
                    <li><strong>HTTP/HTTPS</strong>: Para navegación web segura</li>
                    <li><strong>FTP</strong>: Transferencia de archivos</li>
                    <li><strong>SMTP</strong>: Envío de correos electrónicos</li>
                    <li><strong>DNS</strong>: Sistema de nombres de dominio</li>
                    <li><strong>DHCP</strong>: Configuración automática de direcciones IP</li>
                </ul>
            `
        },
        {
            id: 'seguridad',
            titulo: 'Seguridad en Redes',
            contenido: `
                <h3>Protegiendo la red</h3>
                <p>La seguridad en redes es fundamental para proteger la información y los recursos.</p>
                
                <h4>Medidas de seguridad:</h4>
                <ul>
                    <li>Cortafuegos (Firewalls)</li>
                    <li>Redes Privadas Virtuales (VPN)</li>
                    <li>Encriptación de datos</li>
                    <li>Autenticación de usuarios</li>
                    <li>Actualizaciones de seguridad</li>
                </ul>
                
                <h4>Amenazas comunes:</h4>
                <ul>
                    <li>Malware</li>
                    <li>Phishing</li>
                    <li>Ataques de denegación de servicio (DDoS)</li>
                    <li>Hombre en el medio</li>
                </ul>
            `
        }
    ]
};

// Variables globales
let currentTopicIndex = 0;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Cargar temas en el menú
    const topicsList = document.getElementById('topics-list');
    bookData.temas.forEach((tema, index) => {
        const topicElement = document.createElement('div');
        topicElement.className = 'topic' + (index === 0 ? ' active' : '');
        topicElement.textContent = tema.titulo;
        topicElement.dataset.topicId = tema.id;
        topicElement.dataset.index = index;
        topicElement.addEventListener('click', () => loadTopic(index));
        topicsList.appendChild(topicElement);
    });

    // Cargar el primer tema
    if (bookData.temas.length > 0) {
        loadTopic(0);
    }

    // Configurar botones de navegación
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentTopicIndex > 0) {
            loadTopic(currentTopicIndex - 1);
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentTopicIndex < bookData.temas.length - 1) {
            loadTopic(currentTopicIndex + 1);
        }
    });

    // Actualizar estado de los botones
    updateNavigationButtons();
});

// Función para cargar un tema
function loadTopic(index) {
    if (index < 0 || index >= bookData.temas.length) return;
    
    // Actualizar tema activo en el menú
    const topics = document.querySelectorAll('.topic');
    topics.forEach(topic => topic.classList.remove('active'));
    topics[index].classList.add('active');
    
    // Actualizar contenido
    const tema = bookData.temas[index];
    const contentDisplay = document.getElementById('content-display');
    contentDisplay.innerHTML = `
        <h2>${tema.titulo}</h2>
        <div class="topic-content active">
            ${tema.contenido}
        </div>
    `;
    
    // Actualizar índice actual
    currentTopicIndex = index;
    
    // Actualizar botones de navegación
    updateNavigationButtons();
    
    // Desplazar al inicio del contenido
    contentDisplay.scrollTo(0, 0);
}

// Función para actualizar el estado de los botones de navegación
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentTopicIndex === 0;
    nextBtn.disabled = currentTopicIndex === bookData.temas.length - 1;
}

// Agregar animación al cambiar de tema
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content-display');
    
    // Observar cambios en el contenido
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                // Agregar clase de animación
                content.style.opacity = 0;
                setTimeout(() => {
                    content.style.opacity = 1;
                    content.style.transition = 'opacity 0.3s ease-in-out';
                }, 10);
            }
        });
    });
    
    // Configurar el observador
    observer.observe(content, { childList: true });
});
