import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.next();
        Map<Integer, String> map = new HashMap<Integer, String>();
        map.put(1, "Amy");
        map.put(2, "Joe");
        map.put(3, "Tom");
        map.put(4, "Susan");

        printMap(map);

        map.put(5, name);

        map.remove(4);
        map.put(3, "Tommy");

        System.out.println();

        printMap(map);

    }

    private static void printMap(Map<Integer, String> map) {
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ":" + entry.getValue());
        }

    }
}
