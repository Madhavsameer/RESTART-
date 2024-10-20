package OTHERS.Prodesk;
public class first {
    public static void main(String[] args) {
        pattern(5);
    }

    public static void pattern(int n) {
        // First part of the pattern (inverted triangle)
        for (int i = n; i > 0; i--) {
            for (int k = 1; k <= n - i; k++) {
                System.out.print(" ");
            }
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Second part of the pattern (triangle, starting from row 2)
        for (int i = 2; i <= n; i++) {
            for (int k = 1; k <= n - i; k++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
