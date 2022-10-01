const db = require('../database/models/index')
/* requiero la constante db, del indez, que en ella me trae toda la funcion que recorre todos los modelos y me permite llamarlos */

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
                return res.render('moviesList', {
                    movies
                })
            })
            .catch((error) => console.log(error))
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                return res.render('moviesDetail', {
                    movie
                })
            })
            .catch((error) => console.log(error))

    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC'] //si lo pongo como un array dentro de otro, me toma el segundo parametro como un modificador del primero
            ]
        })
        .then((movies) => {
            return res.render('newestMovies',{
                movies
            })
        })
        .catch((error) => console.log(error))
    },
    recomended :(req,res) => {
        db.Movie.findAll({
            order: [
                ['rating', 'DESC'] //si lo pongo como un array dentro de otro, me toma el segundo parametro como un modificador del primero
            ],
            limit : 5
        })
        .then((movies) => {
            return res.render('recommendedMovies',{
                movies
            })
        })
        .catch((error) => console.log(error))
    },
    
    }
