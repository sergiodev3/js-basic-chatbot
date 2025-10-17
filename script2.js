/* ============================================
   📚 CHATBOT EDUCATIVO - EJEMPLO CON FUNCIONES
   ============================================
   
   🎯 INSTRUCCIONES PARA ESTUDIANTES:
   
   Este código es un EJEMPLO de chatbot sobre mascotas virtuales.
   Tu tarea es crear tu PROPIO chatbot con un tema diferente.
   
   🌟 Temas sugeridos:
   - 🍕 Restaurante (pedidos de comida)
   - ⚽ Deportes (entrenamiento personal)
   - 🎮 Videojuegos (recomendador de juegos)
   - 🏥 Salud (consulta médica básica)
   - 🎵 Música (recomendador de canciones)
   - 📚 Educación (tutor virtual)
   
   📝 Requisitos:
   1. Cambia el TEMA del chatbot
   2. Modifica las PREGUNTAS y RESPUESTAS
   3. Usa template literals (`${}`)
   4. Crea al menos 3 FUNCIONES
   5. Incluye validaciones con if/else
   6. Agrega emojis para hacer más divertido
   
   ⚡ Conceptos que practicas:
   - Funciones con parámetros
   - Template literals
   - Condicionales
   - Variables let/const
   - alert(), prompt(), confirm()
   
   ¡Sé creativo y diviértete programando! 🚀
   ============================================ */

// ===== CONFIGURACIÓN DEL CHATBOT =====
const BOT_NAME = 'PetBot';
const BOT_VERSION = '2.0';

// Variables globales
let userName = '';
let petName = '';
let petType = '';
let puntos = 50;

// ===== FUNCIONES DEL CHATBOT =====

// Función para obtener y validar el nombre del usuario
function obtenerNombreUsuario() {
    userName = prompt('¿Cómo te llamas?');
    
    if (userName === '' || userName === null) {
        userName = 'Amigo';
        alert('¡Está bien! Te llamaré Amigo 😊');
    } else {
        alert(`¡Hola ${userName}! Bienvenido 🎉`);
    }
    
    return userName;
}

// Función para elegir el tipo de mascota
function elegirMascota() {
    petType = prompt('¿Qué mascota prefieres?\nEscribe: perro o gato');
    
    if (petType === 'perro') {
        alert('¡Excelente! Los perros son leales 🐕');
        puntos += 10;
    } else if (petType === 'gato') {
        alert('¡Genial! Los gatos son cariñosos 🐱');
        puntos += 5;
    } else {
        petType = 'mascota especial';
        alert('Será una mascota especial ✨');
    }
    
    return petType;
}

// Función para poner nombre a la mascota
function ponerNombreMascota() {
    petName = prompt(`¿Cómo quieres llamar a tu ${petType}?`);
    
    if (petName === '' || petName === null) {
        petName = 'Buddy';
        alert('Le pondré Buddy por defecto 🐾');
    }
    
    alert(`¡Perfecto! ${petName} es tu ${petType} 🎊`);
    return petName;
}

// Función para realizar actividad de alimentar
function alimentarMascota() {
    const quiereAlimentar = confirm(`¿Quieres alimentar a ${petName}?`);
    
    if (quiereAlimentar) {
        puntos += 20;
        alert(`¡${petName} está muy feliz! 😋🍖`);
    } else {
        puntos -= 10;
        alert(`${petName} tiene hambre... 😔`);
    }
    
    return quiereAlimentar;
}

// Función para realizar actividad de jugar
function jugarConMascota() {
    const quiereJugar = confirm(`¿Quieres jugar con ${petName}?`);
    
    if (quiereJugar) {
        puntos += 15;
        alert(`¡${petName} se divirtió muchísimo! 🎾🎉`);
    } else {
        alert(`${petName} se quedó esperando... 😞`);
    }
    
    return quiereJugar;
}

// Función para evaluar el resultado final
function evaluarResultado(puntosFinales) {
    alert(`📊 Puntos de felicidad final: ${puntosFinales}`);
    
    if (puntosFinales >= 70) {
        alert(`🌟 ¡EXCELENTE! ${petName} está súper feliz`);
        return 'Excelente';
    } else if (puntosFinales >= 50) {
        alert(`😊 ¡BIEN! ${petName} está contento`);
        return 'Bien';
    } else {
        alert(`😢 ${petName} necesita más cuidado`);
        return 'Necesita mejorar';
    }
}

// Función para mostrar resumen final
function mostrarResumen(resultado) {
    console.log('=== RESUMEN DE LA SESIÓN ===');
    console.log(`Usuario: ${userName}`);
    console.log(`Mascota: ${petName} (${petType})`);
    console.log(`Puntos finales: ${puntos}`);
    console.log(`Evaluación: ${resultado}`);
    console.log('============================');
}

// ===== PROGRAMA PRINCIPAL =====

// Función principal que ejecuta todo el chatbot
function iniciarChatbot() {
    // Saludo inicial
    alert(`¡Hola! Soy ${BOT_NAME} v${BOT_VERSION} 🤖🐾`);
    
    // Obtener información del usuario
    obtenerNombreUsuario();
    
    // Preguntar si quiere una mascota
    const quiereMascota = confirm('¿Quieres adoptar una mascota virtual?');
    
    if (quiereMascota) {
        // Proceso de adopción
        elegirMascota();
        ponerNombreMascota();
        
        // Actividades de cuidado
        alimentarMascota();
        jugarConMascota();
        
        // Evaluar y mostrar resultado
        const resultado = evaluarResultado(puntos);
        mostrarResumen(resultado);
        
        alert(`¡Gracias por cuidar a ${petName}, ${userName}! 🐾❤️`);
        
    } else {
        alert('¡Tal vez en otra ocasión! 👋');
        console.log(`${userName} decidió no adoptar una mascota`);
    }
}

// ¡EJECUTAR EL CHATBOT!
iniciarChatbot();
