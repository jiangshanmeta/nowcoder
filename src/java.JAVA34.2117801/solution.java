import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num = scanner.nextDouble();

        System.out.println(Math.abs(num));
        System.out.println(Math.sqrt(num));
        System.out.println(Math.log(num));
        System.out.println(Math.sin(num));

    }
}