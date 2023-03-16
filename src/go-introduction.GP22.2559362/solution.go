package main

//import "fmt"
import "math"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s int整型一维数组 评委给出分数
 * @return int整型一维数组
 */
func minAndMax(s []int) []int {
	min := math.MaxInt64
	max := math.MinInt64

	for _, item := range s {
		if item > max {
			max = item
		}
		if item < min {
			min = item
		}
	}
	return []int{
		min,
		max,
	}
}
