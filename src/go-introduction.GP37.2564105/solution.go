package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param material int整型一维数组 成品质量
 * @param standard int整型 质检标准
 * @return int整型一维数组
 */
func check(material []int, standard int) []int {
	result := []int{}
	for _, item := range material {
		if item < standard {
			continue
		}
		result = append(result, item)
	}
	return result
}
