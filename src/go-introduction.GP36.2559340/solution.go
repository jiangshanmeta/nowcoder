package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型二维数组
 * @return int整型一维数组
 */
func transform(array [][]int) []int {
	result := []int{}
	for _, row := range array {
		for _, item := range row {
			result = append(result, item)
		}
	}
	return result
}
