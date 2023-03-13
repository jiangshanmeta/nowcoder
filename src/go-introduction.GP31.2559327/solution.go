package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param age int整型 年龄
 * @return string字符串
 */
func getAge(age int) string {
	if age > 59 {
		return "老年"
	} else if age > 35 {
		return "中年"
	} else if age > 18 {
		return "青年"
	} else if age > 11 {
		return "少年"
	} else if age > 4 {
		return "儿童"
	} else if age > 0 {
		return "幼儿"
	} else {
		return "婴儿"
	}
}
