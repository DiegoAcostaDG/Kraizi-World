class Personaje {
    constructor(nombre, raza, clase, nivel, bonificadorCompetencia) {
        this.nombre = nombre;
        this.raza = raza;
        this.clase = clase;
        this.bonificadorCompetencia = 2;
        this.nivel = nivel;
        this.experiencia = 0;
        this.experienciaNecesaria = 100 * nivel;
        this.vidaMaxima = 100; // Vida máxima del personaje
        this.vidaActual = this.vidaMaxima; // Vida actual inicia al máximo
        this.manaMaximo = 100; // Maná máximo del personaje
        this.manaActual = this.manaMaximo; // Maná actual inicia al máximo


        this.atributos = {
            fuerza: 0,
            constitucion: 0,
            inteligencia: 0,
            carisma: 0,
            destreza: 0,
            sabiduria: 0,
        };
        this.puntosHabilidad = 5 * nivel;
    }

    mostrarInfo() {
        return `
<table>
    <thead>
        <tr>
            <th colspan="3" style="text-align: center;">Personaje</th>
            <th colspan="3" style="text-align: center;">Monedas</th>
            <th colspan="3" style="text-align: center;">Equipamiento</th>
        </tr>
    </thead>
    <tbody>
        <!-- Información del personaje -->
        <tr>
            <td colspan="3"><strong>Nombre: </strong>${this.nombre}</td>
            <td colspan="3"><strong>Oro: </strong> 0 </td>
            <td colspan="3"><strong>Espada</strong></td>
        </tr>
        <tr>
            <td colspan="3"><strong>Raza:</strong> ${this.raza}</td>
            <td colspan="3"><strong>Plata: </strong> 0 </td>
            <td colspan="3"><strong>Escudo</strong></td>
        </tr>
        <tr>
            <td colspan="3"><strong>Clase:</strong> ${this.clase}</td>
            <td colspan="3"><strong>Bronce</strong> 0 </td>
            <td colspan="3"><strong>Arco</strong></td>
        </tr>
        <tr>
            <td colspan="3"><strong>Bonificador Competencia:</strong> ${this.bonificadorCompetencia}</td>
            <td colspan="3"><strong>Cobre</strong> 0 </td>
            <td colspan="3"><strong>Cuchillo</strong></td>
        </tr>
        <tr > 
        <td colspan="9" class ="tablebarra"><strong><h3>Nivel: ${this.nivel}</h3></strong></td>
        </tr>
        <tr> 
         <td colspan="9" class ="tablebarra"> 
            <!-- Barra de experiencia -->
            <div class="barra-experiencia-container">
                <div id="barra-experiencia" class="barra-experiencia"></div>
                <p id="experiencia-texto">Exp: ${this.experiencia}/${this.experienciaNecesaria}</p>
            </div></td>
        </tr>
        <tr> 
         <td colspan="9" class ="tablebarra"> 
            <!-- Barra de vida -->
            <div class="barra-vida-container">
                <div id="barra-vida" class="barra-vida"></div>
                <p id="vida-texto">Vida: ${this.vidaActual}/${this.vidaMaxima}</p>
            </div></td>
        </tr>
            <td colspan="9" class ="tablebarra"> 
            <!-- Barra de mana -->
            <div class="barra-mana-container">
                <div id="barra-mana" class="barra-mana"></div>
                <p id="mana-texto">Maná: ${this.manaActual}/${this.manaMaximo}</p>
            </div>
        </tr>
    </tbody>
</table>

        `;
    }

    // Métodos para la vida
    modificarVida(cantidad) {
        this.vidaActual += cantidad;

        // Limitar la vida a los valores permitidos
        if (this.vidaActual > this.vidaMaxima) {
            this.vidaActual = this.vidaMaxima;
        } else if (this.vidaActual < 0) {
            this.vidaActual = 0;
            alert('¡Has muerto!');
        }

        this.actualizarBarraVida();
    }

    actualizarBarraVida() {
        let porcentaje = (this.vidaActual / this.vidaMaxima) * 100;
        document.getElementById('barra-vida').style.width = porcentaje + '%';
        document.getElementById('vida-texto').innerText = `Vida: ${this.vidaActual}/${this.vidaMaxima}`;
    }

       // Métodos para el Maná
       modificarMana(cantidad) {
        this.vidaActual += cantidad;

        // Limitar la vida a los valores permitidos
        if (this.manaActual > this.manaMaximo) {
            this.manaActual = this.manaMaximo;
        } else if (this.manaActual < 0) {
            this.manaActual = 0;
            alert('¡No te queda maná!');
        }

        this.actualizarBarraMana();
    }

    actualizarBarraMana() {
        let porcentaje = (this.manaActual / this.manaMaximo) * 100;
        document.getElementById('barra-mana').style.width = porcentaje + '%';
        document.getElementById('mana-texto').innerText = `Mana: ${this.manaActual}/${this.manaActual}`;
    }

    // Métodos para la experiencia
    ganarExperiencia(cantidad) {
        this.experiencia += cantidad;

        if (this.experiencia >= this.experienciaNecesaria) {
            this.nivel++;
            this.experiencia = 0;
            this.experienciaNecesaria = 100 * this.nivel; // Nueva experiencia necesaria por nivel
            alert('¡Nivel aumentado!');
        }

        this.actualizarBarraExperiencia();
    }

    actualizarBarraExperiencia() {
        let porcentaje = (this.experiencia / this.experienciaNecesaria) * 100;
        document.getElementById('barra-experiencia').style.width = porcentaje + '%';
        document.getElementById('experiencia-texto').innerText = `Exp: ${this.experiencia}/${this.experienciaNecesaria}`;
    }
}

// Crear instancia del personaje
const miPersonaje = new Personaje('Mr Seta', 'Treant', 'Guerrero', 1);

// Renderizar información del personaje en el HTML
document.getElementById('personaje-info').innerHTML = miPersonaje.mostrarInfo();
document.getElementById('puntos-habilidad').innerText = `Puntos de Habilidad: ${miPersonaje.puntosHabilidad}`;

// Funciones para manejar los atributos
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

// Función para cargar imagen del personaje
function cargarImagen(event) {
    var archivo = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        // Asignar la URL de la imagen al atributo src del <img>
        document.getElementById('imagen-personaje').src = e.target.result;
    };

    reader.readAsDataURL(archivo);
}

// Simulación de cambios
miPersonaje.ganarExperiencia(50); // Ganar 50 de experiencia
miPersonaje.modificarVida(-20);   // Perder 20 puntos de vida
miPersonaje.modificarVida(10);    // Recuperar 10 puntos de vida
miPersonaje.modificarMana(60); 

