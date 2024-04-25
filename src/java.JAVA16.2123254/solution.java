import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int[] ary = new int[6];
        int max;
        int min;
        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < ary.length; i++) {
            ary[i] = scanner.nextInt();
        }

        max = max_list(ary);
        min = min_list(ary);

        System.out.println(max + " " + min);
    }

    private static int max_list(int... arg) {
        int result = arg[0];
        for (int i = 1; i < arg.length; i++) {
            result = Math.max(result, arg[i]);
        }

        return result;
    }

    private static int min_list(int... arg) {
        int result = arg[0];
        for (int i = 1; i < arg.length; i++) {
            result = Math.min(result, arg[i]);
        }

        return result;
    }

}