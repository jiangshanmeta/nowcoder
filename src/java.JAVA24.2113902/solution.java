import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNext()) {
            String className = scanner.next();
            Base obj = (Base) Class.forName(className).newInstance();
            System.out.println(getClassName(obj));
        }
    }

    public static String getClassName(Base obj) {

        if (obj instanceof Sub1) {
            return "Sub1";
        }
        if (obj instanceof Sub2) {
            return "Sub2";
        }

        return "Base";
    }

}

class Base {

}

class Sub1 extends Base {

}

class Sub2 extends Base {

}