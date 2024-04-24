import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        float h = scanner.nextFloat();
        int n = scanner.nextInt();

        float sum = -h;
        while (n > 0) {
            sum += h * 2;
            h /= 2;
            n--;
        }

        System.out.println(String.format("%.3f", h) + " " + String.format("%.3f", sum));
        // 输出格式为：System.out.println(String.format("%.3f", h)+" "+String.format("%.3f",
        // sum));

    }
}
