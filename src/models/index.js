const Actor = require('./Actor')
const Director = require('./Director')
const Genre = require('./Genre')
const Movie = require('./Movie')

Movie.belongsToMany(Director, { through: 'moviesDirectors' })
//Director.hasMany(Movie)

Movie.belongsToMany(Actor, { through: 'moviesActors' })
//Actor.hasMany(Movie)

Movie.belongsToMany(Genre, { through: 'moviesGenres' })
//Genre.hasMany(Movie)
