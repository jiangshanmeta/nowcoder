import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNext()) {
            String className = scanner.next();
            // print就是需要你定义的方法
            print(Class.forName(className).newInstance());
        }
    }

    public static void print(Object o) {
        System.out.println(o);
    }

}

class First {
    public String toString() {
        return "First";
    }
}

class Second {
    public String toString() {
        return "Second";
    }
}

class Third {
    public String toString() {
        return "Third";
    }
}