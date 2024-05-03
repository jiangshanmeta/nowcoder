import java.util.ArrayDeque;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        ArrayDeque deque = new ArrayDeque();

        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNext()) {
            String name = scanner.next();
            // 初始化队列中的数据
            deque.offerLast(name);
        }
        boolean flag = true;
        while (!deque.isEmpty()) {
            if (flag) {
                System.out.println(deque.removeFirst());
            } else {
                System.out.println(deque.removeLast());
            }
            flag = !flag;
        }

    }

}
