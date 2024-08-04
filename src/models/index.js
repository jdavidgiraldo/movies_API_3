const Actor = require('./Actor')
const Director = require('./Director')
const Genre = require('./Genre')
const Movie = require('./Movie')

Movie.belongsToMany(Director, { through: 'moviesDirectors' })
Director.hasMany(Movie)
