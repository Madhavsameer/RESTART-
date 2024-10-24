package DSA.Pattern;

/**
 * TufPattern
 */
public class TufPattern {

    public static void main(String[] args) {
        // rectangle(5, 6);
        // square(5);
        // right(5);
        // right2(5);
        // right3(5);
        // rightInverted(5);
        // rightInverted2(5);
        // triangle(5);
        // invertedTriangle(5);
        // combineTriangle(5);
        p11(5);
        p12(5);
        
    }

    public static void rectangle(int l, int b){
        System.out.println("Rectangle Pattern");
        for(int i=1; i<=l; i++){
            for(int j=1; j<=b; j++){
                System.out.print(" * ");
            }
            System.out.println();
        }
    }

    public static void square(int n){
        System.out.println("Square pattern");
        for (int i = 1; i <=n; i++) {
            for (int j = 1; j <=n; j++) {
                System.out.print(" * ");
                
            }
            System.out.println();
            
        }
    }

    public static void right(int n){
        System.out.println("Right Triangle");
        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void right2(int n){
        System.out.println("Right Triangle");
        for(int i=1; i<=n; i++){
            int val=1;
            for(int j=1; j<=i; j++){
                
                System.out.print(val);
                val++;
            }
            System.out.println();
        }
    }

    public static void right3(int n){
        System.out.println("Right Triangle");
        int val=1;
        
        for(int i=1; i<=n; i++){
            
            for(int j=1; j<=i; j++){
                
                System.out.print(val);
                
            }
            System.out.println();
            val++;
        }
    }

    public static void rightInverted(int n){
        System.out.println("Right inverted Triangle");
        for(int i=n; i>=1; i--){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void rightInverted2(int n){
        System.out.println("Right inverted Triangle");
        for(int i=n; i>=1; i--){
            int val=1;
            for(int j=1; j<=i; j++){
                System.out.print(val);
                val++;
            }
            System.out.println();
        }
    }

    public static void triangle(int n){
        System.out.println("Full triangle");
        for(int i=1; i<=n; i++){

            for(int j=1; j<=n-i; j++){
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

    public static void invertedTriangle(int n){
        System.out.println("Inverted Full triangle");
        for(int i=n; i>=1; i--){

            for(int j=1; j<=n-i; j++){
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

    public static void combineTriangle(int n){
        System.out.println("Combined Triangle");
        for(int i=1; i<=n; i++){

            for(int j=1; j<=n-i; j++){
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

        for(int i=n; i>=1; i--){

            for(int j=1; j<=n-i; j++){
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

    public static void p11(int n){
        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n; i>=1; i--){
            for(int j=2; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }


    }

    public static void p12(int n){

        int start=1;
        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){

                

                
                
            }
            System.out.println();
        }
    }


}