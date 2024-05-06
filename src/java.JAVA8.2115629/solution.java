import java.util.Scanner;

import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();
        String emailMatcher = "[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+";

        Pattern p = Pattern.compile(emailMatcher);

        if (p.matcher(str).find()) {
            System.out.println("邮箱格式合法");
        } else {
            System.out.println("邮箱格式不合法");
        }

    }
}
