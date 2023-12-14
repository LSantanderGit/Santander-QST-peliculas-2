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
        return movies
    }
}