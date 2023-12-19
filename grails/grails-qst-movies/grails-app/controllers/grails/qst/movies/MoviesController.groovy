package qst.movies

import grails.converters.JSON

class MoviesController {

    def moviesService

    def index() {
        render (view: 'list')
    }

    def list() {}

    def create() {}

    def getMovies() {
        println("HOla llegue a grails")
        def movies = moviesService.listMovies()
        println("movies: \n" + movies)
        render movies as JSON
    }
}