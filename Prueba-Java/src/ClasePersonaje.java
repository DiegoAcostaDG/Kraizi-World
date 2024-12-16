public class ClasePersonaje {
    public enum TipoClasePersonaje {
        GUERRERO(100, 20),
        PICARO(80, 25),
        MAGO(60, 30);

        @SuppressWarnings("FieldMayBeFinal")
        private int vida;
        @SuppressWarnings("FieldMayBeFinal")
        private int ataque;

        // Constructor
        TipoClasePersonaje(int vida, int ataque) {
            this.vida = vida;
            this.ataque = ataque;
        }

        // Métodos para obtener los valores de vida y ataque
        public int getVida() {
            return vida;
        }

        public int getAtaque() {
            return ataque;
        }
    }

    public static void main(String[] args) {
        for (TipoClasePersonaje clase : TipoClasePersonaje.values()) {
            System.out.println(clase + ": Vida = " + clase.getVida() + ", Ataque = " + clase.getAtaque());
        }
    }
}