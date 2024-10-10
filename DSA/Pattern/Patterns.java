package DSA.Pattern;

/**
 * Patterns
 */
public class Patterns {

    public static void main(String[] args) {

        // System.out.println("Right Triangle");
        // right(5);

        // System.out.println("Right Inverted Triangle");
        // rightInverted(5);

        // System.out.println("Left Triangle");
        // left(5);

        // System.out.println("Right Inverted triangle");
        // rightInverted(5);

        System.out.println("Prodesk IT");
        prodesk(5);
        

    }

    public static void right(int n){
        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void rightInverted(int n){
        for(int i=n; i>=1; i--){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void left(int n){
        for(int i=1; i<=n; i++){

            for(int k=1; k<=n-i; k++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void leftInverted(int n){
        for(int i=n; i>=1; i--){

            for(int k=1; k<=n-i; k++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void prodesk(int n){

        for(int i=n; i>=1; i--){

            for(int k=1; k<=n-i; k++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            for(int j=2; j<=i; j++){
                System.out.print("*");
            }
            
            System.out.println();
        }

        for(int i=2; i<=n; i++){

            for(int k=1; k<=n-i; k++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            for(int j=2; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }

        


    }
}