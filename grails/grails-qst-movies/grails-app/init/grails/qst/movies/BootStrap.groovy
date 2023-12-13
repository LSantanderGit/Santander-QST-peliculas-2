package grails.qst.movies
import qst.init.Init

class BootStrap {

    def init = { servletContext ->
        Init.begin()
    }
    def destroy = {
    }
}
