package qst.movies

class Movies {
    String title
    String description 
    String rating
    String duration
    String releasedDate
    String trailerLink
    String posterDir
    List<String> genre

    static constraints = {
        title nullable: false
        description nullable: false
        rating nullable: false
        duration nullable: false
        releasedDate nullable: false
        trailerLink nullable: false
        posterDir nullable: false
        genre nullable: false
    }
}
