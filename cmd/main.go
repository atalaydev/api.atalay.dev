package main

import (
	"io"
	"log"
	"net/http"
)

func main() {
	// Just a basic HTTP webserver.
	helloHandler := func(rw http.ResponseWriter, request *http.Request) {
		io.WriteString(rw, "Hello, world!\n")
	}

	http.HandleFunc("/henlo", helloHandler)
	log.Println("Listing for requests at :8000/henlo")
	log.Fatal(http.ListenAndServe(":8000", nil))
}

/*

Implementation Plan
	/meta:
		{
			headline: str
			announcement: {
				body: str
				ref: str
			}
			links: {
				name: str
				icon: str
				ref: str
			}
		}
	/articles: {
		title: str
		summary: str
		ref: str
	}
	/article/{slug}:
		title: str
		content: str
		suggestion: str

*/
