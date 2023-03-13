package main

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param forwards string字符串 推箱子方向
 * @return bool布尔型
 */
func pushBox(forwards string) bool {
	x := 0
	y := 0
	for _, c := range forwards {
		str := string(c)

		if str == "R" {
			y++
		} else if str == "L" {
			y--
		} else if str == "U" {
			x--
		} else if str == "D" {
			x++
		}
	}
	return x == 0 && y == 0
}
