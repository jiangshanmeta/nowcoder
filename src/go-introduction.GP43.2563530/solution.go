package main

import (
	"fmt"
)

type Address struct {
	province string
	city     string
}

type Student struct {
	name  string
	sex   bool
	age   int
	score int
	Address
}

func main() {
	a := Student{
		"小明",
		true,
		23,
		88,
		Address{
			province: "湖南省",
			city:     "长沙市",
		},
	}

	fmt.Println(a.name)
	fmt.Println(a.sex)
	fmt.Println(a.age)
	fmt.Println(a.score)
	fmt.Println(a.province)
	fmt.Println(a.city)
}
