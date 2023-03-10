package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param a bool布尔型
 * @param b bool布尔型
 * @return bool布尔型一维数组
 */
func logicalOperation(a bool, b bool) []bool {
	return []bool{
		a && b,
		a || b,
		!a,
		!b,
	}
}
