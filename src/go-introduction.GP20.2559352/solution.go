package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param src int整型一维数组 源切片
 * @param des int整型一维数组 目的切片
 * @return int整型一维数组
 */
func sliceCopy(src []int, des []int) []int {
	return append(des, src...)
}
