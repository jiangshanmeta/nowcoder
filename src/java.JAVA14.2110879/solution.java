import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Main main = new Main();
        Scanner scan = new Scanner(System.in);
        int number = scan.nextInt();
        System.out.println(main.isPrimeNumber(number));
    }

    public Boolean isPrimeNumber(int number) {

        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}