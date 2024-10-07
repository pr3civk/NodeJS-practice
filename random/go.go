package main

import (
	"fmt"
	"strconv"
)

func nextLowerNumber(num int) int {
	numStr := strconv.Itoa(num)
	if len(numStr) <= 1 || len(numStr) > 5 {
		return num
	}

	for i := len(numStr) - 1; i > 0; i-- {
		if numStr[i] < numStr[i-1] {
			numStr = numStr[:i-1] + string(numStr[i]) + string(numStr[i-1]) + numStr[i+1:]
			newNum, _ := strconv.Atoi(numStr)
			return newNum
		}
	}

	return num
}

func main() {
	fmt.Println(nextLowerNumber(41684))  // Output: 212
}
