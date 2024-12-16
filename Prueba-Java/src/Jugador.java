
import java.util.Scanner;

public class Jugador {

    // Atributos
    private String nombre;
    private String raza;
    private int nivel;
    private ClasePersonaje.TipoClasePersonaje clasePersonaje;

    // Constructor
    public Jugador(ClasePersonaje.TipoClasePersonaje clasePersonaje, int nivel, String nombre, String raza) {
        this.clasePersonaje = clasePersonaje;
        this.nivel = nivel;
        this.nombre = nombre;
        this.raza = raza;
    }

    // Métodos getter y setter
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public ClasePersonaje.TipoClasePersonaje getClasePersonaje() {
        return clasePersonaje;
    }

    public void setClasePersonaje(ClasePersonaje.TipoClasePersonaje clasePersonaje) {
        this.clasePersonaje = clasePersonaje;
    }

    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduce el nombre de tu personaje: ");
        String nombre = scanner.next();

        System.out.println("Introduce la clase de tu personaje (GUERRERO, PICARO, MAGO): ");
        String clase = scanner.next().toUpperCase();
        ClasePersonaje.TipoClasePersonaje tipoClasePersonaje = ClasePersonaje.TipoClasePersonaje.valueOf(clase);

        System.out.println("Introduce la raza de tu personaje: ");
        String raza = scanner.next();

        Jugador jugador1 = new Jugador(tipoClasePersonaje, 1, nombre, raza);

        System.out.println("Las características de tu personaje son : \nNombre: " + jugador1.getNombre() + "\nClase: " + jugador1.getClasePersonaje() + "\nRaza: " + jugador1.getRaza() + "\nNivel: " + jugador1.getNivel());

        scanner.close();
    }
}
