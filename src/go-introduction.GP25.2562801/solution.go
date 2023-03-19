package main

//import "fmt"

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums1 int整型一维数组
 * @param m int整型
 * @param nums2 int整型一维数组
 * @param n int整型
 * @return int整型一维数组
 */
func merge(nums1 []int, m int, nums2 []int, n int) []int {
	index := m + n - 1
	m--
	n--
	for m > -1 && n > -1 {
		if nums1[m] > nums2[n] {
			nums1[index] = nums1[m]
			index--
			m--
		} else {
			nums1[index] = nums2[n]
			index--
			n--
		}
	}
	for n > -1 {
		nums1[index] = nums2[n]
		index--
		n--
	}
	return nums1
}
