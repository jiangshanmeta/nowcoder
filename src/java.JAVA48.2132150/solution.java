import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        Main main = new Main();
        int number = console.nextInt();
        System.out.println(main.palindromeNumber(number));
    }

    public Boolean palindromeNumber(int number) {

        String str = Integer.toString(number);
        int l = 0;
        int r = str.length() - 1;
        while (l < r) {
            if (str.charAt(l++) != str.charAt(r--)) {
                return false;
            }

        }

        return true;
    }
}