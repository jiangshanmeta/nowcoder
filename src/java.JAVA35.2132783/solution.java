import java.time.LocalDate;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int year = console.nextInt();

        LocalDate localDate = LocalDate.of(year, 1, 1);
        for (int i = 1; i <= 12; i++) {
            System.out.println(year + "年" + localDate.getMonthValue() + "月:" +
                    localDate.lengthOfMonth() + "天");
            if (i != 12) {
                localDate = localDate.withMonth(i + 1);
            }

        }

    }
}