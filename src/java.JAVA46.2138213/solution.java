import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();

        Employee employee1 = new Employee("小明", 2500);
        Employee employee2 = new Employee("小军", 8000);
        Employee employee3 = new Employee("小红", 100000);
        employees.add(employee1);
        employees.add(employee2);
        employees.add(employee3);

        for (int i = 0; i < employees.size(); i++) {
            double tax = 0.0;
            double taxIncome = employees.get(i).getSalary() - 3500;
            if (taxIncome <= 0) {
                tax = 0.0;
            } else if (taxIncome <= 1500) {
                tax = taxIncome * 0.03;
            } else if (taxIncome <= 4500) {
                tax = taxIncome * 0.10 - 105;
            } else if (taxIncome <= 9000) {
                tax = taxIncome * 0.20 - 555;
            } else if (taxIncome <= 35000) {
                tax = taxIncome * 0.25 - 1005;
            } else if (taxIncome <= 55000) {
                tax = taxIncome * 0.30 - 2755;
            } else if (taxIncome <= 80000) {
                tax = taxIncome * 0.35 - 5505;
            } else {
                tax = taxIncome * 0.45 - 13505;
            }
            System.out.println(employees.get(i).getName() +
                    "应该缴纳的个人所得税是：" + tax);
        }

    }
}

class Employee {
    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}