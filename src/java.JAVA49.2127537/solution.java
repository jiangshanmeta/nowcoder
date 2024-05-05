import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int start = scanner.nextInt();
        int end = scanner.nextInt();
        method(start, end);
    }

    public static void method(int start, int end) {
        int count = 0;

        if (end < start) {
            end ^= start;
            start ^= end;
            end ^= start;
        }

        for (int i = Math.max(start, 3); i <= end; i++) {
            if (isPrime(i)) {
                count++;
            }

        }

        System.out.println(start + "到" + end + "之间有" + count + "个大于2的素数");
    }

    public static boolean isPrime(int n) {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

}