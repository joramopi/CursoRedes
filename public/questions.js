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
        text: 'Un tipo de sistema operativo', 
        correct: false 
      },
      { 
        id: 4, 
        text: 'Un dispositivo de almacenamiento en la nube', 
        correct: false 
      }
    ],
    explanation: 'Una red de computadoras es un conjunto de dispositivos conectados entre sí para compartir información y recursos como impresoras, archivos o conexión a Internet.'
  },
  {
    id: 2,
    type: 'truefalse',
    question: 'El protocolo TCP/IP es el estándar de comunicación en Internet.',
    correctAnswer: 'Verdadero',
    explanation: 'TCP/IP es el conjunto de protocolos de red en los que se basa Internet y la mayoría de las redes actuales.'
  },
  {
    id: 3,
    type: 'matching',
    question: 'Empareja cada capa del modelo OSI con su función:',
    items: [
      { term: 'Capa de Aplicación', correct: 'Proporciona servicios de red a las aplicaciones' },
      { term: 'Capa de Transporte', correct: 'Gestiona la entrega confiable de datos' },
      { term: 'Capa de Red', correct: 'Encamina los paquetes a través de la red' },
      { term: 'Capa de Enlace de Datos', correct: 'Gestiona la transmisión de tramas entre nodos' }
    ],
    options: [
      'Proporciona servicios de red a las aplicaciones',
      'Gestiona la entrega confiable de datos',
      'Encamina los paquetes a través de la red',
      'Gestiona la transmisión de tramas entre nodos'
    ],
    explanation: 'El modelo OSI tiene 7 capas, cada una con funciones específicas en la comunicación de red.'
  },
  {
    id: 4,
    type: 'choice',
    multiple: true,
    question: '¿Cuáles de los siguientes son dispositivos de red?',
    options: [
      { id: 1, text: 'Router', correct: true },
      { id: 2, text: 'Switch', correct: true },
      { id: 3, text: 'Teclado', correct: false },
      { id: 4, text: 'Monitor', correct: false },
      { id: 5, text: 'Hub', correct: true }
    ],
    explanation: 'Los dispositivos de red son equipos que permiten la interconexión de computadoras y otros dispositivos en una red.'
  },
  {
    id: 5,
    type: 'truefalse',
    question: 'La dirección IP 192.168.1.1 es una dirección IP pública.',
    correctAnswer: 'Falso',
    explanation: 'Las direcciones IP que comienzan con 192.168.x.x son direcciones privadas reservadas para redes locales.'
  },
  {
    id: 6,
    type: 'matching',
    question: 'Empareja cada tipo de cable de red con su descripción:',
    items: [
      { term: 'UTP Cat 5e', correct: 'Hasta 1 Gbps, 100 MHz de ancho de banda' },
      { term: 'UTP Cat 6', correct: 'Hasta 10 Gbps, 250 MHz de ancho de banda' },
      { term: 'Fibra óptica monomodo', correct: 'Larga distancia, núcleo fino' },
      { term: 'Fibra óptica multimodo', correct: 'Corta distancia, núcleo ancho' }
    ],
    options: [
      'Hasta 1 Gbps, 100 MHz de ancho de banda',
      'Hasta 10 Gbps, 250 MHz de ancho de banda',
      'Larga distancia, núcleo fino',
      'Corta distancia, núcleo ancho'
    ],
    explanation: 'Los diferentes tipos de cableado tienen características específicas que los hacen más adecuados para ciertos usos.'
  },
  {
    id: 7,
    type: 'choice',
    multiple: false,
    question: '¿Qué protocolo se utiliza para asignar direcciones IP automáticamente en una red?',
    options: [
      { id: 1, text: 'HTTP', correct: false },
      { id: 2, text: 'FTP', correct: false },
      { id: 3, text: 'DHCP', correct: true },
      { id: 4, text: 'DNS', correct: false }
    ],
    explanation: 'DHCP (Dynamic Host Configuration Protocol) se encarga de asignar direcciones IP de forma automática a los dispositivos en una red.'
  },
  {
    id: 8,
    type: 'truefalse',
    question: 'El ancho de banda se mide en bits por segundo (bps).',
    correctAnswer: 'Verdadero',
    explanation: 'El ancho de banda es la cantidad máxima de datos que pueden transmitirse a través de una conexión de red en un período de tiempo determinado, y se mide en bits por segundo (bps) o múltiplos como Kbps, Mbps o Gbps.'
  },
  {
    id: 9,
    type: 'matching',
    question: 'Empareja cada tipo de red con su descripción:',
    items: [
      { term: 'LAN', correct: 'Red de área local, alcance limitado' },
      { term: 'WAN', correct: 'Red de área amplia, cubre grandes distancias' },
      { term: 'MAN', correct: 'Red de área metropolitana' },
      { term: 'PAN', correct: 'Red de área personal' }
    ],
    options: [
      'Red de área local, alcance limitado',
      'Red de área amplia, cubre grandes distancias',
      'Red de área metropolitana',
      'Red de área personal'
    ],
    explanation: 'Las redes se clasifican según su alcance geográfico y propósito.'
  }
];

// Hacer las preguntas accesibles globalmente
window.quizQuestions = questions;
