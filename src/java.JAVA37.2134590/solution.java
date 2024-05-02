import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int score = scanner.nextInt();

        try {
            if (score >= 0 && score <= 100) {
                System.out.println(score);
            } else {
                throw new ScoreException();
            }

        } catch (ScoreException e) {
            System.out.println(e.getMessage());
        }

    }
}

class ScoreException extends Exception {

    public ScoreException() {
        super("分数不合法");
    }

}