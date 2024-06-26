import java.util.*;

public class Main {
    public static void main(String[] args) {
        Guest guest1 = new Guest("小明", false);
        Guest guest2 = new Guest("小军", false);
        Guest vipGuest = new Guest("小红", true);
        Deque<Guest> deque = new ArrayDeque<>();
        deque.add(guest1);
        deque.add(guest2);

        deque.addFirst(vipGuest);

        System.out.println(deque);
    }
}

class Guest {
    String name;
    Boolean vip;

    @Override
    public String toString() {
        return name;
    }

    public Guest(String name, Boolean vip) {
        this.name = name;
        this.vip = vip;

    }
}