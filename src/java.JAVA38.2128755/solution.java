import java.util.HashSet;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        scanner.close();
        HashSet<Character> hs = new HashSet<>();

        for (int i = 0; i < str.length(); i++) {
            hs.add(str.charAt(i));
        }

        for (char c : hs) {
            System.out.print(c);
        }
    }
}