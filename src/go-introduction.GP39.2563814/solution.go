package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param i int整型 数字
 * @return int整型
 */
func factorial(i int) int {
	result := i
	for i > 2 {
		i--
		result *= i
	}
	return result
}
