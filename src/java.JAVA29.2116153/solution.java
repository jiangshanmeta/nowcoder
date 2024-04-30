import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();

        int rest = str.length() % 3;
        StringBuilder sb = new StringBuilder();
        if (rest > 0) {
            sb.append(str.substring(0, rest) + ",");
        }
        for (int i = rest; i < str.length(); i += 3) {
            sb.append(str.substring(i, i + 3));
            if (i + 3 != str.length()) {
                sb.append(",");
            }
        }

        System.out.println(sb.toString());

    }
}