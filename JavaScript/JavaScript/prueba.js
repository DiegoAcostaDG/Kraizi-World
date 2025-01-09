class Personaje {
    constructor(nombre, raza, clase, nivel, puntosDeVida, habilidades) {
        this.nombre = nombre;
        this.raza = raza;
        this.clase = clase;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.habilidades = habilidades;
        this.atributos = {
            fuerza: 0,
            constitucion: 0,
            inteligencia: 0,
            carisma: 0
        };
        this.puntosHabilidad = 5 * nivel;
    }

    mostrarInfo() {
        return `
            <h1> Atributos </h1>
            <p><strong>Nombre:</strong> ${this.nombre}</p>
            <p><strong>Raza:</strong> ${this.raza}</p>
            <p><strong>Clase:</strong> ${this.clase}</p>
            <p><strong>Nivel:</strong> ${this.nivel}</p>
            <p><strong>Puntos de Vida:</strong> ${this.puntosDeVida}</p>
            <p><strong>Habilidades:</strong> ${this.habilidades.join(', ')}</p>
        `;
    }
}

const miPersonaje = new Personaje(
    'Aragorn',
    'Humano',
    'Guerrero',
    1,
    10,
    ['Espada', 'Arco', 'Estrategia']
);

document.getElementById('personaje-info').innerHTML = miPersonaje.mostrarInfo();
document.getElementById('puntos-habilidad').innerText = `Puntos de Habilidad: ${miPersonaje.puntosHabilidad}`;

function incrementar(atributo) {
    if (miPersonaje.puntosHabilidad > 0) {
        miPersonaje.atributos[atributo]++;
        miPersonaje.puntosHabilidad--;
        actualizarAtributo(atributo);
    } else {
        alert('No tienes suficientes puntos de habilidad.');
    }
}

function decrementar(atributo) {
    if (miPersonaje.atributos[atributo] > 0) {
        miPersonaje.atributos[atributo]--;
        miPersonaje.puntosHabilidad++;
        actualizarAtributo(atributo);
    } else {
        alert('No puedes reducir el atributo por debajo del valor inicial.');
    }
}

function actualizarAtributo(atributo) {
    document.getElementById(atributo).innerText = `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${miPersonaje.atributos[atributo]}`;
    document.getElementById('puntos-habilidad').innerText = `Puntos de Habilidad: ${miPersonaje.puntosHabilidad}`;
}