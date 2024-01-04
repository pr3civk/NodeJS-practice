package main

import (
	"fmt"
	"time"
)

func main() {
	start := time.Now()
	for i := 0; i < 1000000; i++ {
		fmt.Print(i, "func \n")
	}
	end := time.Since(start)
	fmt.Println("Time taken:", end)
}


//func random() {
    // fmt.Println("func")
// }
// type random2 struct {
//     name string
//}
