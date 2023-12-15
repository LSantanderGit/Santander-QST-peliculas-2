package qst.movies

import grails.transaction.Transactional
import org.hibernate.transform.Transformers

@Transactional
class MoviesService {
    def sessionFactory

    public List<Movies> listMovies() {

        def query= """  
        SELECT 
            movies.title as title,
            movies.description as description,
            movies.rating as rating,
            movies.duration as duration,
            movies.released_date as releasedDate,
            movies.trailer_link as trailerLink,
            movies.poster_dir as posterDir,
            movies.genre as genre
        FROM movies; """
    
        def movies = sessionFactory.currentSession.createSQLQuery(query).setResultTransformer(Transformers.aliasToBean(LinkedHashMap)).list().collect{
            def item = [:]
            item["title"] = it.title
            item["description"] = it.description
            item["rating"] = it.rating
            item["duration"] = it.duration
            item["releasedDate"] = it.releasedDate
            item["trailerLink"] = it.trailerLink
            item["posterDir"] = it.posterDir
            item["genre"] = it.genre

            return item
        }      
        return movies
    }
    
     
}