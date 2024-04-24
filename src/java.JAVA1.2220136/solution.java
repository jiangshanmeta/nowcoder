import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double d = scanner.nextDouble();
        System.out.println(Main.typeConversion(d));
    }

    public static int typeConversion(double d) {

        return (int) d;

    }
}