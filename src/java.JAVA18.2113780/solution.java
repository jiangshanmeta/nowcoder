public class Main {
    public static void main(String[] args) {
        int[][] arr = { { 11, 33, 55 }, { 22, 44, 66, 88 }, { 131, 214, 315, 146 }, { 928, 827, 726, 625 },
                { 424, 525 } };
        int sum = add(arr);
        System.out.println(sum);
    }

    public static int add(int[][] arr) {
        int sum = 0;

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        }

        return sum;
    }
}