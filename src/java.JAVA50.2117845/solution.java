import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextDouble()) {
            double s = scanner.nextDouble();
            // Circle和Square是需要你定义的类
            System.out.println(String.format("%.3f", new Circle(s).getArea()));
            System.out.println(String.format("%.3f", new Square(s).getArea()));
        }
    }

}

class Shape {

    private double s; // 周长

    public Shape(double s) {
        this.s = s;
    }

    public double getS() {
        return s;
    }

}

interface Area {
    double getArea(); // 面积
}

// 圆形
class Circle extends Shape implements Area {
    public Circle(double s) {
        super(s);
    }

    public double getArea() {
        double r = getS() / (2 * Math.PI);

        return Math.PI * r * r;
    }

}

// 方形
class Square extends Shape implements Area {
    public Square(double s) {
        super(s);
    }

    public double getArea() {
        double r = getS() / 4;

        return r * r;
    }

}