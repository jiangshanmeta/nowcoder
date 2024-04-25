import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int sum = 0;
        int count = 0;
        int num;
        while ((num = scan.nextInt()) != -1) {
            sum += num;
            count++;
        }

        System.out.println(String.format("%.2f", (double) sum / count));

    }
}