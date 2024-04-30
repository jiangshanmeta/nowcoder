import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double d = scanner.nextDouble();

        int i = (int) Math.round(d);

        System.out.println(i);
    }
}