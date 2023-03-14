package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param a int整型
 * @param b int整型
 * @return int整型一维数组
 */
func operate(a int, b int) []int {
	return []int{
		a + b,
		a - b,
		a * b,
		a / b,
		a % b,
	}
}
