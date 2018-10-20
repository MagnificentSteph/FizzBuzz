package main

import (
  routes"github.com/slfitzge/FizzBuzz/server/routes"
  "github.com/slfitzge/FizzBuzz/server/routes/middlewares"
  "log"
  "net/http"
  "github.com/gorilla/mux"
  "github.com/urfave/negroni"
)

func StartServer(){
  router := mux.NewRouter()
  apiRoutes := mux.NewRouter().PathPrefix("/api").Subrouter().StrictSlash(true)

  apiRoutes.HandleFunc("/fizz_buzz", routes.ExecuteFizzBuzz).Methods("GET", "POST")
  apiRoutes.HandleFunc("/seed", routes.SeedMaxRange).Methods("GET")

  router.PathPrefix("/api").Handler(negroni.New(
    negroni.Wrap(middlewares.CorsHandler(apiRoutes)),
  ))

  log.Fatal(http.ListenAndServe(":8000", middlewares.CorsHandler(router)))
}
