import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        if (a < b) {
            a ^= b;
            b ^= a;
            a ^= b;
        }
        scanner.close();

        System.out.print(a + b);
        System.out.print(' ');

        System.out.print(a - b);
        System.out.print(' ');

        System.out.print(a * b);
        System.out.print(' ');

        System.out.print(a / b);
        System.out.print(' ');

        System.out.print(a % b);
        // System.out.print(' ');

    }
}