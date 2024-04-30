import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextInt()) {
            int x = scanner.nextInt();
            int y = scanner.nextInt();
            Sub sub = new Sub(x, y);
            System.out.println(sub.sum());
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

    public final int getY() {
        return y;
    }

    public final int sum() {
        return getX() + getY();
    }

}

class Sub extends Base {

    public Sub(int x, int y) {
        super(x, y);
    }

    @Override
    public int getX() {
        return super.getX() * 10;
    }

}