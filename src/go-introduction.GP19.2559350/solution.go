package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param length int整型 切片初始化长度
 * @param capacity int整型 切片初始化容量
 * @return int整型一维数组
 */
func makeslice(length int, capacity int) []int {
	result := make([]int, length, capacity)
	for i := range result {
		result[i] = i
	}
	return result
}
