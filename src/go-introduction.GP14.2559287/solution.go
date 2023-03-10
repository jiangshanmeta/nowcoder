package main

//import "fmt"
import "math"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param x int整型 采购单价
 * @param y int整型 采购单价
 * @param z int整型 采购单价
 * @return int整型
 */
func compare(x int, y int, z int) int {
	max := math.Max(math.Max(float64(x), float64(y)), float64(z))
	min := math.Min(math.Min(float64(x), float64(y)), float64(z))
	return int(max - min)
}
