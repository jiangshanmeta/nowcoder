package main

import (
	"fmt"
)

type Student struct {
	name  string
	sex   bool
	age   int
	score int
}

func main() {
	xiaoming := Student{
		"小明",
		true,
		23,
		88,
	}
	fmt.Println(xiaoming.name)
	fmt.Println(xiaoming.sex)
	fmt.Println(xiaoming.age)
	fmt.Println(xiaoming.score)
}
