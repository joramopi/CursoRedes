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
  }
];

// Hacer las preguntas accesibles globalmente
window.quizQuestions = questions;