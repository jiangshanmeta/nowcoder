import java.util.*;

public class Main {

    public static void main(String[] args) {
        LikeRecorder recorder = new LikeRecorderImpl();

        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNext()) {
            String name = scanner.next();
            recorder.like(name);
        }

        System.out.println(Arrays.toString(recorder.getLikeUsers()));
    }

}

/**
 * 点赞记录器
 */
interface LikeRecorder {

    /**
     * 若用户没有点赞过，则记录此次点赞行为。
     * 若用户曾经点赞过，则删除用户点赞记录。
     *
     * @param username 用户名
     */
    void like(String username);

    /**
     * 返回所有点赞的用户名
     *
     * @return 用户名数组
     */
    String[] getLikeUsers();

}

class LikeRecorderImpl implements LikeRecorder {

    private Set<String> set = new HashSet<>();

    public void like(String username) {
        if (set.contains(username)) {
            set.remove(username);
        } else {
            set.add(username);
        }

    }

    public String[] getLikeUsers() {

        return set.toArray(new String[0]);
    }

}