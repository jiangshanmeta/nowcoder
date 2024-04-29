import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextInt()) {
            int x = scanner.nextInt();
            int y = scanner.nextInt();
            Sub sub = new Sub(x, y);
            sub.calculate();
        }
    }

}

class Base {

    private int x;
    private int y;

    public Base(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public void calculate() {
        System.out.println(getX() * getY());
    }

}

class Sub extends Base {
    public Sub(int x, int y) {
        super(x, y);
    }

    @Override
    public void calculate() {
        if (getY() == 0) {
            System.out.println("Error");
            return;
        }
        System.out.println(getX() / getY());
    }

}