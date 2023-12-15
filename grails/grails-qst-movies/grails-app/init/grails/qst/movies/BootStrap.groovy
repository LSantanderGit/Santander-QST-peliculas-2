package grails.qst.movies
import qst.Init.Init


class BootStrap {

    def init = { servletContext ->
        Init.begin()
    }
    def destroy = {
    }
}
