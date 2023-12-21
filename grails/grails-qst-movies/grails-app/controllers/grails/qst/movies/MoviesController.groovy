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
        def movies = moviesService.listMovies()
        render movies as JSON
    }

    def getMoviesByGenre() {
        def genre = params.genre
        def movies = moviesService.listMoviesByGenre(genre)
        render movies as JSON
    }


}