package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Server is listening...")
	fs:= http.FileServer(http.Dir("/app/dist/space_game_scores/browser"))
	http.Handle("/",fs)

	http.ListenAndServe("0.0.0.0:4200",nil)
}