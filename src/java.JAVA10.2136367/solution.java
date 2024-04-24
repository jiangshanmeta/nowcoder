import java.util.*;

public class Main {
    public static void main(String[] args) {
        int count = 0;
        Scanner scanner = new Scanner(System.in);
        int input;
        while (true) {
            input = scanner.nextInt();
            if (input <= 0) {
                break;
            }
            count++;
        }
        System.out.println(count);

    }
}