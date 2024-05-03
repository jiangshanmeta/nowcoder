import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int numbers = 0;
        int words = 0;
        int space = 0;
        int other = 0;
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();

        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (Character.isAlphabetic(chars[i])) {
                words++;
            } else if (Character.isDigit(chars[i])) {
                numbers++;
            } else if (Character.isSpace(chars[i])) {
                space++;
            } else {
                other++;
            }
        }

        System.out.println("英文字母" + words + "数字" + numbers + "空格" + space + "其他" + other);
    }
}