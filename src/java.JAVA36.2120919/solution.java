import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
import java.util.Calendar;
import java.text.SimpleDateFormat;

public class Main {
    public static void main(String[] args) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Scanner in = new Scanner(System.in);
        String str1 = in.nextLine();

        // write your code here......
        Calendar calendar = Calendar.getInstance();// 选用Calendar是因为能自动处理累加不规则的日期
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String[] beijing = str1.split(" ");
        calendar.set(Integer.valueOf(beijing[0]),
                Integer.valueOf(beijing[1]) - 1, // Calendar源码中的一月是从0开始的
                Integer.valueOf(beijing[2]),
                Integer.valueOf(beijing[3]),
                Integer.valueOf(beijing[4]),
                Integer.valueOf(beijing[5]));
        System.out.println("北京时间为：" + simpleDateFormat.format(
                calendar.getTime()));
        calendar.set(Integer.valueOf(beijing[0]),
                Integer.valueOf(beijing[1]) - 1, // Calendar源码中的一月是从0开始的
                Integer.valueOf(beijing[2]),
                Integer.valueOf(beijing[3]) - 12, // 纽约时间要慢12个小时
                Integer.valueOf(beijing[4]),
                Integer.valueOf(beijing[5]));
        System.out.println("纽约时间为：" + simpleDateFormat.format(
                calendar.getTime()));
    }
}
