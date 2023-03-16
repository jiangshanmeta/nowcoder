package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s int整型一维数组 身高
 * @param index int整型 出队索引
 * @return int整型一维数组
 */
func deleteElement(s []int, index int) []int {
	return append(s[0:index], s[index+1:]...)
}
