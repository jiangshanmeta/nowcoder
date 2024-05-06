public class Main {
    public static void main(String[] args) {

        long result = 0;
        long num = 9;
        while (num <= 9999999999L) {
            result += num;
            num = num * 10 + 9;
        }
        System.out.println(result);

    }
}