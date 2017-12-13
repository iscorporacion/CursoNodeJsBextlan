'use strict'

var MovieModel = require('../models/movie-model'),
    MovieController = () => {}

MovieController.getAll = (req, res, next) => {
    MovieModel.getAll((err, rows) => {
        if (err) {
            let locals = {
                title: 'Error al consultar la base de datos',
                descripction: 'Error de sintaxis SQL',
                error: err
            }
            res.render('error', locals)
        } else {
            let locals = {
                title: 'Lista peliculas',
                data: rows
            }

            res.render('index', locals)
        }
    })
}

MovieController.getAllJson = (req, res, next) => {
    MovieModel.getAll((err, rows) => {
        if (err) {
            let locals = {
                title: 'Error al consultar la base de datos',
                descripction: 'Error de sintaxis SQL',
                error: err
            }
            res.json(locals)
        } else {
            let locals = {
                title: 'Lista peliculas',
                data: rows
            }
            console.log(rows)
            res.json(rows)
        }
    })
}

MovieController.getOne = (req, res, next) => {
        let movie_id = req.params.movie_id
        MovieModel.getOne(movie_id, (err, rows) => {
            console.log(err, '---', rows)

            if (err) {
                let locals = {
                    title: `Error al buscar el registro con id: ${movie_id}`,
                    descripction: 'Error de sintaxis SQL',
                    error: err
                }
                res.render('error', locals)
            } else {
                let locals = {
                    title: 'Editar Pelicula',
                    data: rows
                }

                res.render('edit-movie', locals)
            }
        })
    }
    /*
    MovieController.insert = (req, res, next) => {
        let movie = {
            movie_id: req.body.movie_id,
            title: req.body.title,
            release_year: req.body.release_year,
            rating: req.body.rating,
            image: req.body.image
        }

        console.log(movie)
        MovieModel.insert(movie, (err) => {
            if (err) {
                let locals = {
                    title: `Error al agregar el registro con id: ${movie.movie_id}`,
                    descripction: 'Error de sintaxis SQL',
                    error: err
                }
                res.render('error', locals)
            } else {
                res.redirect('/')
            }
        })
    }

    MovieController.update = (req, res, next) => {
        let movie = {
            movie_id: req.body.movie_id,
            title: req.body.title,
            release_year: req.body.release_year,
            rating: req.body.rating,
            image: req.body.image
        }

        console.log(movie)
        MovieModel.update(movie, (err) => {
            if (err) {
                let locals = {
                    title: `Error al actualizar el registro con id: ${movie.movie_id}`,
                    descripction: 'Error de sintaxis SQL',
                    error: err
                }
                res.render('error', locals)
            } else {
                res.redirect('/')
            }
        })
    }
    */

MovieController.save = (req, res, next) => {
    let movie = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        release_year: req.body.release_year,
        rating: req.body.rating,
        image: req.body.image
    }

    console.log(movie)
    MovieModel.save(movie, (err) => {
        if (err) {
            let locals = {
                title: `Error al salvar el registro con id: ${movie.movie_id}`,
                descripction: 'Error de sintaxis SQL',
                error: err
            }
            res.render('error', locals)
        } else {
            res.redirect('/')
        }
    })
}

MovieController.delete = (req, res, next) => {
    let movie_id = req.params.movie_id
    MovieModel.delete(movie_id, (err, rows) => {
        console.log(err, '---', rows)

        if (err) {
            let locals = {
                title: `Error al eliminar el registro con id: ${movie_id}`,
                descripction: 'Error de sintaxis SQL',
                error: err
            }
            res.render('error', locals)
        } else {
            res.redirect('/')
        }
    })
}

MovieController.addForm = (req, res, next) => {
    res.render('add-movie', { title: 'Agregar pelicula' })
}

MovieController.error404 = (req, res, next) => {
    let error = new Error(),
        locals = {
            title: 'Error 404',
            descripcion: 'Recurso no encontrado',
            error: error
        }

    error.status = 404

    res.render('error', locals)

    next()
}

module.exports = MovieController