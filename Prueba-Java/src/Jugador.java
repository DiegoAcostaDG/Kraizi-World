
import java.util.Scanner;

public class Jugador {

    //Atributos
    public String nombre;
    public String clasePersonaje;
    public String raza;
    public int nivel;

    public String getNombre() {
        return nombre;
    }


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }


    public String getClasePersonaje() {
        return clasePersonaje;
    }


    public void setClasePersonaje(String clasePersonaje) {
        this.clasePersonaje = clasePersonaje;
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


    public Jugador(String clasePersonaje, int nivel, String nombre, String raza) {
        this.clasePersonaje = clasePersonaje;
        this.nivel = nivel;
        this.nombre = nombre;
        this.raza = raza;
    }

    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Jugador jugador1 = new Jugador(null, 1, null, null);
        System.out.println("Introduce el nombre de tu personaje: ");
        String nombre = scanner.next();
        jugador1.setNombre(nombre);
        System.out.println("Introduce la clase de tu personaje: ");
        String clase = scanner.next();
        jugador1.setClasePersonaje(clase);
        System.out.println("Introduce la raza de tu personaje: ");
        String raza = scanner.next();
        jugador1.setRaza(raza);

        System.out.println("Las características de tu personaje son : \nNombre:"+jugador1.getNombre()+"\nClase:"+ jugador1.getClasePersonaje()+ "\nRaza:"+jugador1.getRaza()+"\nNivel:"+jugador1.getNivel());
        scanner.close();
    }

}
