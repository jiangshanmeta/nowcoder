import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextInt()) {
            int seed = scanner.nextInt();
            Random random = new Random(seed);

            System.out.println(random.nextInt(6) + 1);

        }
    }

}
