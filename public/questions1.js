// Array de preguntas para el cuestionario
const questions = [
  {
    id: 1,
    type: 'choice',
    multiple: false,
    question: '¿Qué es una red de computadoras?',
    options: [
      { id: 1, text: 'Un software de diseño gráfico', correct: false },
      { 
        id: 2, 
        text: 'Una conexión de dispositivos para compartir información y recursos', 
        correct: true 
      },
      { 
        id: 3, 
        text: 'Un tipo de archivo multimedia', 
        correct: false 
      },
      { 
        id: 4, 
        text: 'Un lenguaje de programación', 
        correct: false 
      }
    ],
    explanation: 'Una red conecta dispositivos para permitir la comunicación entre ellos.'
  },
  {
    id: 2,
    type: 'truefalse',
    question: 'Las redes WAN son redes de área pequeña.',
    correctAnswer: 'Falso',
    explanation: 'Las WAN (Wide Area Network) abarcan grandes extensiones geográficas.'
  },
  {
    id: 3,
    type: 'choice',
    multiple: true,
    question: '¿Cuáles de los siguientes elementos son componentes de una red?',
    options: [
      { id: 1, text: 'Computadoras', correct: true },
      { id: 2, text: 'Switches', correct: true },
      { id: 3, text: 'Lámparas', correct: false },
      { id: 4, text: 'Cables Ethernet', correct: true }
    ],
    explanation: 'Los dispositivos, medios de transmisión y dispositivos de red conforman una red.'
  },
  {
    id: 4,
    type: 'matching',
    question: 'Relacione cada capa del modelo OSI con su función principal.',
    items: [
      { term: 'Física', correct: 'Transmisión de bits' },
      { term: 'Transporte', correct: 'Entrega fiable de datos' },
      { term: 'Red', correct: 'Direccionamiento IP' },
      { term: 'Aplicación', correct: 'Interacción del usuario con la red' }
    ],
    options: [ // Las opciones para matching deben ser un array plano de los valores correctos
      'Transmisión de bits',
      'Entrega fiable de datos',
      'Direccionamiento IP',
      'Interacción del usuario con la red'
    ],
    explanation: 'Cada capa del modelo OSI cumple una función específica dentro del proceso de comunicación.'
  },
  {
    id: 5,
    type: 'truefalse',
    question: 'La capa de sesión del modelo OSI es la responsable de iniciar y mantener una comunicación.',
    correctAnswer: 'Verdadero',
    explanation: 'Esta capa establece y gestiona sesiones entre aplicaciones.'
  },
  {
    id: 6,
    type: 'choice',
    multiple: false,
    question: '¿Cuál es el protocolo principal de la capa de red del modelo TCP/IP?',
    options: [
      { id: 1, text: 'HTTP', correct: false },
      { id: 2, text: 'IP', correct: true },
      { id: 3, text: 'FTP', correct: false },
      { id: 4, text: 'TCP', correct: false }
    ],
    explanation: 'La capa Internet usa el protocolo IP para direccionamiento y enrutamiento.'
  },
  {
    id: 7,
    type: 'choice',
    multiple: false,
    question: 'El modelo TCP/IP tiene cuántas capas:',
    options: [
      { id: 1, text: '7', correct: false },
      { id: 2, text: '5', correct: false },
      { id: 3, text: '4', correct: true },
      { id: 4, text: '3', correct: false }
    ],
    explanation: 'El modelo TCP/IP posee 4 capas principales: Aplicación, Transporte, Internet y Acceso a la red.'
  },
  {
    id: 8,
    type: 'choice',
    multiple: true,
    question: 'Selecciona capas del modelo OSI que no tienen correspondencia directa en TCP/IP.',
    options: [
      { id: 1, text: 'Presentación', correct: true },
      { id: 2, text: 'Sesión', correct: true },
      { id: 3, text: 'Red', correct: false },
      { id: 4, text: 'Aplicación', correct: false }
    ],
    explanation: 'Las capas Sesión y Presentación están integradas en la capa de Aplicación del TCP/IP.'
  },
  {
    id: 9,
    type: 'truefalse',
    question: 'En el encapsulamiento, el tráiler se añade en la capa de red.',
    correctAnswer: 'Falso',
    explanation: 'El tráiler se añade en la capa de enlace de datos.'
  },
  {
    id: 10,
    type: 'matching',
    question: 'Relaciona cada unidad de datos con su capa correspondiente.',
    items: [
      { term: 'Segmento', correct: 'Transporte' },
      { term: 'Paquete', correct: 'Red' },
      { term: 'Trama', correct: 'Enlace de datos' },
      { term: 'Bit', correct: 'Física' }
    ],
    options: [
      'Transporte',
      'Red',
      'Enlace de datos',
      'Física'
    ],
    explanation: 'Cada capa encapsula los datos usando su propia unidad: segmento, paquete, trama, bit.'
  },
  {
    id: 11,
    type: 'choice',
    multiple: false,
    question: '¿Qué unidad de datos se genera en la capa de transporte?',
    options: [
      { id: 1, text: 'Trama', correct: false },
      { id: 2, text: 'Paquete', correct: false },
      { id: 3, text: 'Segmento', correct: true },
      { id: 4, text: 'Bit', correct: false }
    ],
    explanation: 'La capa de transporte divide la información en segmentos.'
  },
  {
    id: 12,
    type: 'truefalse',
    question: 'El modelo OSI fue creado antes del modelo TCP/IP.',
    correctAnswer: 'Verdadero',
    explanation: 'El modelo OSI fue propuesto por la ISO, pero TCP/IP se implementó antes masivamente.'
  },
  {
    id: 13,
    type: 'choice',
    multiple: true,
    question: '¿Cuáles son funciones de la capa de enlace de datos?',
    options: [
      { id: 1, text: 'Direccionamiento MAC', correct: true },
      { id: 2, text: 'Enrutamiento', correct: false },
      { id: 3, text: 'Control de errores', correct: true },
      { id: 4, text: 'Establecimiento de sesión', correct: false }
    ],
    explanation: 'La capa de enlace de datos se encarga de direccionamiento físico y control de errores.'
  },
  {
    id: 14,
    type: 'matching',
    question: 'Relaciona cada dispositivo con su función en una red.',
    items: [
      { term: 'Router', correct: 'Enrutar paquetes entre redes' },
      { term: 'Switch', correct: 'Conmutar tramas en una red local' },
      { term: 'Acces point', correct: 'Proveer conexión inalámbrica' },
      { term: 'NIC', correct: 'Conectar el dispositivo a la red' }
    ],
    options: [
      'Enrutar paquetes entre redes',
      'Conmutar tramas en una red local',
      'Proveer conexión inalámbrica',
      'Conectar el dispositivo a la red'
    ],
    explanation: 'Cada dispositivo cumple una función específica y fundamental.'
  },
  {
    id: 15,
    type: 'truefalse',
    question: 'La capa física añade la cabecera IP a los datos.',
    correctAnswer: 'Falso',
    explanation: 'La cabecera IP se añade en la capa de red.'
  },
  {
    id: 16,
    type: 'choice',
    multiple: false,
    question: '¿Qué capa del modelo OSI corresponde al navegador web?',
    options: [
      { id: 1, text: 'Transporte', correct: false },
      { id: 2, text: 'Presentación', correct: false },
      { id: 3, text: 'Aplicación', correct: true },
      { id: 4, text: 'Red', correct: false }
    ],
    explanation: 'El navegador es una aplicación que interactúa con la capa 7.'
  },
  {
    id: 17,
    type: 'choice',
    multiple: true,
    question: 'Selecciona protocolos de la capa de aplicación.',
    options: [
      { id: 1, text: 'HTTP', correct: true },
      { id: 2, text: 'FTP', correct: true },
      { id: 3, text: 'TCP', correct: false },
      { id: 4, text: 'IP', correct: false }
    ],
    explanation: 'HTTP y FTP son protocolos de aplicación; TCP e IP pertenecen a capas inferiores.'
  },
  {
    id: 18,
    type: 'matching',
    question: 'Relaciona las capas del modelo TCP/IP con sus equivalentes del modelo OSI.',
    items: [
      { term: 'Aplicación', correct: 'Aplicación, Presentación y Sesión' },
      { term: 'Transporte', correct: 'Transporte' },
      { term: 'Internet', correct: 'Red' },
      { term: 'Acceso a red', correct: 'Enlace de datos y Física' }
    ],
    options: [
      'Aplicación, Presentación y Sesión',
      'Transporte',
      'Red',
      'Enlace de datos y Física'
    ],
    explanation: 'TCP/IP agrupa varias capas del OSI para un modelo más práctico.'
  },
  {
    id: 19,
    type: 'truefalse',
    question: 'En una red LAN, los dispositivos están dispersos geográficamente.',
    correctAnswer: 'Falso',
    explanation: 'En una LAN, los dispositivos están ubicados en un área pequeña.'
  },
  {
    id: 20,
    type: 'choice',
    multiple: false,
    question: '¿Cuál es el orden correcto de encapsulamiento de datos?',
    options: [
      { id: 1, text: 'Bit → Trama → Paquete → Segmento → Datos', correct: false },
      { id: 2, text: 'Datos → Segmento → Paquete → Trama → Bit', correct: true },
      { id: 3, text: 'Segmento → Datos → Bit → Trama → Paquete', correct: false },
      { id: 4, text: 'Trama → Segmento → Datos → Bit → Paquete', correct: false }
    ],
    explanation: 'Cada capa encapsula la unidad anterior en el orden correcto del modelo OSI.'
  },
  {
    id: 21,
    type: 'truefalse',
    question: 'El modelo TCP/IP fue desarrollado para el Departamento de Defensa de EE.UU.',
    correctAnswer: 'Verdadero',
    explanation: 'TCP/IP se originó como un proyecto del Departamento de Defensa estadounidense.'
  },
  {
    id: 22,
    type: 'choice',
    multiple: false,
    question: '¿Cuál de los siguientes es un dispositivo de red?',
    options: [
      { id: 1, text: 'Ratón', correct: false },
      { id: 2, text: 'Switch', correct: true },
      { id: 3, text: 'Teclado', correct: false },
      { id: 4, text: 'Monitor', correct: false }
    ],
    explanation: 'El switch conecta dispositivos en una red local.'
  },
  {
    id: 23,
    type: 'matching',
    question: 'Relaciona el tipo de red con su alcance geográfico.',
    items: [
      { term: 'LAN', correct: 'Oficina pequeña' },
      { term: 'MAN', correct: 'Ciudad' },
      { term: 'WAN', correct: 'País o continente' }
    ],
    options: [
      'Oficina pequeña',
      'Ciudad',
      'País o continente'
    ],
    explanation: 'Las redes se clasifican por su cobertura territorial.'
  },
  {
    id: 24,
    type: 'choice',
    multiple: true,
    question: '¿Cuáles protocolos actúan en la capa de transporte del modelo TCP/IP?',
    options: [
      { id: 1, text: 'UDP', correct: true },
      { id: 2, text: 'FTP', correct: false },
      { id: 3, text: 'TCP', correct: true },
      { id: 4, text: 'IP', correct: false }
    ],
    explanation: 'TCP y UDP son protocolos de transporte; IP es de red y FTP de aplicación.'
  },
  {
    id: 25,
    type: 'truefalse',
    question: 'La dirección IP sirve para identificar un dispositivo en la red.',
    correctAnswer: 'Verdadero',
    explanation: 'IP identifica de forma única a cada dispositivo en una red.'
  },
  {
    id: 26,
    type: 'choice',
    multiple: false,
    question: 'El modelo OSI tiene cuántas capas:',
    options: [
      { id: 1, text: '4', correct: false },
      { id: 2, text: '5', correct: false },
      { id: 3, text: '6', correct: false },
      { id: 4, text: '7', correct: true }
    ],
    explanation: 'El modelo OSI consta de 7 capas estándar.'
  },
  {
    id: 27,
    type: 'choice',
    multiple: true,
    question: 'Selecciona ejemplos de medios de transmisión guiados.',
    options: [
      { id: 1, text: 'Fibra óptica', correct: true },
      { id: 2, text: 'Par trenzado', correct: true },
      { id: 3, text: 'Ondas de radio', correct: false },
      { id: 4, text: 'Infrarrojo', correct: false }
    ],
    explanation: 'Los cables son medios guiados; las ondas son medios no guiados.'
  },
  {
    id: 28,
    type: 'matching',
    question: 'Relaciona cada capa con su número en el modelo OSI.',
    items: [
      { term: 'Física', correct: 'Capa 1' },
      { term: 'Red', correct: 'Capa 3' },
      { term: 'Transporte', correct: 'Capa 4' },
      { term: 'Aplicación', correct: 'Capa 7' }
    ],
    options: [
      'Capa 1',
      'Capa 3',
      'Capa 4',
      'Capa 7'
    ],
    explanation: 'Cada capa del OSI está numerada del 1 (física) al 7 (aplicación).'
  },
  {
    id: 29,
    type: 'truefalse',
    question: 'El protocolo TCP es más fiable que UDP.',
    correctAnswer: 'Verdadero',
    explanation: 'TCP garantiza entrega, orden y control de errores; UDP no.'
  },
  {
    id: 30,
    type: 'choice',
    multiple: false,
    question: '¿Qué dispositivo asigna direcciones IP a los equipos en una red local?',
    options: [
      { id: 1, text: 'Switch', correct: false },
      { id: 2, text: 'Punto de acceso', correct: false },
      { id: 3, text: 'Servidor DHCP', correct: true },
      { id: 4, text: 'Hub', correct: false }
    ],
    explanation: 'El servidor DHCP asigna automáticamente direcciones IP.'
  },
  {
    id: 31,
    type: 'choice',
    multiple: true,
    question: 'Elije funciones de la capa de red:',
    options: [
      { id: 1, text: 'Direccionamiento IP', correct: true },
      { id: 2, text: 'Enrutamiento', correct: true },
      { id: 3, text: 'Conexión física', correct: false },
      { id: 4, text: 'Formato de datos', correct: false }
    ],
    explanation: 'La capa de red dirige los datos entre redes.'
  },
  {
    id: 32,
    type: 'matching',
    question: 'Relaciona el nombre del modelo con su función principal.',
    items: [
      { term: 'OSI', correct: 'Modelo teórico de referencia' },
      { term: 'TCP/IP', correct: 'Modelo práctico usado en Internet' }
    ],
    options: [
      'Modelo teórico de referencia',
      'Modelo práctico usado en Internet'
    ],
    explanation: 'OSI explica, TCP/IP se usa en la vida real.'
  },
  {
    id: 33,
    type: 'truefalse',
    question: 'El encapsulamiento de datos ocurre solo en la capa de aplicación.',
    correctAnswer: 'Falso',
    explanation: 'El encapsulamiento ocurre en cada capa al enviar los datos.'
  },
  {
    id: 34,
    type: 'choice',
    multiple: false,
    question: '¿Cuál de estos servicios funciona en la capa de aplicación?',
    options: [
      { id: 1, text: 'IP', correct: false },
      { id: 2, text: 'FTP', correct: true },
      { id: 3, text: 'UDP', correct: false },
      { id: 4, text: 'ARP', correct: false }
    ],
    explanation: 'FTP permite la transferencia de archivos a nivel de aplicación.'
  },
  {
    id: 35,
    type: 'choice',
    multiple: true,
    question: 'Protocolos de capa de red:',
    options: [
      { id: 1, text: 'IP', correct: true },
      { id: 2, text: 'ICMP', correct: true },
      { id: 3, text: 'UDP', correct: false },
      { id: 4, text: 'SSH', correct: false }
    ],
    explanation: 'IP e ICMP operan en la capa de red; UDP en transporte; SSH en aplicación.'
  },
  {
    id: 36,
    type: 'matching',
    question: 'Relaciona capas con su función en TCP/IP.',
    items: [
      { term: 'Transporte', correct: 'Control de flujo y errores' },
      { term: 'Internet', correct: 'Enrutamiento y direccionamiento' },
      { term: 'Aplicación', correct: 'Servicios al usuario' },
      { term: 'Acceso a red', correct: 'Enlace físico y transmisión de bits' }
    ],
    options: [
      'Control de flujo y errores',
      'Enrutamiento y direccionamiento',
      'Servicios al usuario',
      'Enlace físico y transmisión de bits'
    ],
    explanation: 'Cada capa TCP/IP tiene funciones específicas.'
  },
  {
    id: 37,
    type: 'truefalse',
    question: 'En redes inalámbricas, no se puede usar el modelo TCP/IP.',
    correctAnswer: 'Falso',
    explanation: 'El modelo TCP/IP es independiente del tipo de medio físico.'
  },
  {
    id: 38,
    type: 'choice',
    multiple: false,
    question: 'El proceso de desencapsulamiento sucede en:',
    options: [
      { id: 1, text: 'El emisor', correct: false },
      { id: 2, text: 'El router', correct: false },
      { id: 3, text: 'El receptor', correct: true },
      { id: 4, text: 'El switch', correct: false }
    ],
    explanation: 'El receptor remueve las cabeceras capa por capa.'
  },
  {
    id: 39,
    type: 'choice',
    multiple: true,
    question: 'Selecciona ventajas de una red de computadoras:',
    options: [
      { id: 1, text: 'Compartir impresoras', correct: true },
      { id: 2, text: 'Jugar en línea', correct: true },
      { id: 3, text: 'Disminuir la velocidad de Internet', correct: false },
      { id: 4, text: 'Compartir archivos', correct: true }
    ],
    explanation: 'Las redes permiten compartir recursos y colaborar.'
  },
  {
    id: 40,
    type: 'matching',
    question: 'Relaciona los conceptos con sus descripciones.',
    items: [
      { term: 'MAC', correct: 'Dirección física del dispositivo' },
      { term: 'IP', correct: 'Dirección lógica de red' },
      { term: 'TCP', correct: 'Protocolo de transporte fiable' },
      { term: 'HTTP', correct: 'Protocolo para páginas web' }
    ],
    options: [
      'Dirección física del dispositivo',
      'Dirección lógica de red',
      'Protocolo de transporte fiable',
      'Protocolo para páginas web'
    ],
    explanation: 'Comprender los conceptos clave es fundamental para dominar redes.'
  }
];

// Hacer las preguntas accesibles globalmente
window.quizQuestions = questions;