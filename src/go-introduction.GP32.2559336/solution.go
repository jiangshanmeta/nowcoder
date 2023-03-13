package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param score int整型 分数
 * @return string字符串
 */
func judgeScore(score int) string {
	if score > 89 {
		return "优秀"
	} else if score > 79 {
		return "良好"
	} else if score > 59 {
		return "中等"
	} else {
		return "不及格"
	}
}
