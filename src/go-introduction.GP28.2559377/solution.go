package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return char字符型
 */
func character(s string) byte {
	m := map[rune]int{}
	maxCount := 0
	var result rune
	for _, c := range s {
		count, _ := m[c]
		count += 1
		if count > maxCount {
			maxCount = count
			result = c
		}
		m[c] = count
	}
	return byte(result)
}
