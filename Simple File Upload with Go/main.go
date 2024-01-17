package main

import (
  "fmt"
  "net/http"
  "os"
  "io"
  )
  
func main(){
  http.HandleFunc("/upload",func(w http.ResponseWriter,r *http.Request){
    file,handler:=r.FormFile()
    dest,err:=os.Create("uploaded"+handler.Filename)
    if err!=nil{
      panic(err)
    }else{
      io.Copy(dest,file)
    }
  })
  http.ListenAndServe(":8080",nil)
}