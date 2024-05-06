import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double height = scanner.nextDouble();
        double weight = scanner.nextDouble();

        double bmi = weight / (height * height);

        if (bmi < 18.5) {
            System.out.println("偏瘦");
        } else if (bmi < 20.9) {
            System.out.println("苗条");
        } else if (bmi < 24.9) {
            System.out.println("适中");
        } else {
            System.out.println("偏胖");
        }

    }
}