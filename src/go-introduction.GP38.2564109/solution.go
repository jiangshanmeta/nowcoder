package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param score int整型一维数组 团队成员分数
 * @param target int整型 达标分数
 * @return bool布尔型
 */
func canPass(score []int, target int) bool {
	for _, item := range score {
		if item > target {
			return true
		}
	}
	return false
}
