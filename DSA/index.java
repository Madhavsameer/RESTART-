package DSA;

/**
 * index
 */
public class index {

    public static void main(String[] args) {
        pattern1(5);
        pattern2(5);
        pattern3(5);
        pattern4(5);
        pro(5);
        
    }

    public static void pattern1(int n){

        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void pattern2(int n){

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

    public static void pattern3(int n){

        for(int i=n; i>=n; i--){
            for(int k=1; k<=n-i; k++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void pattern4(int n){

        for(int i=n; i>=1; i--){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void pro(int n){
        for(int i=n; i>=n; i--){
            for(int k=1; k<=n-i; k++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }

            
            System.out.println();
        }
    }


    
        

        
       

    }

    
