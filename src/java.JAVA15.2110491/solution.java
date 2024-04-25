import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        scan.close();

        if (num <= 0) {
            System.out.println(num);
        } else {
            System.out.println(String.valueOf(num).length());
        }

    }
}