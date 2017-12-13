'use strict'

var conn = require('./movie-connection'),
    MovieModel = () => {}

MovieModel.getAll = (cb) => {
    conn.query('select * from movie', cb)
}

MovieModel.getOne = (id, cb) => {
    conn.query('select * from movie where movie_id=?', id, cb)
}

MovieModel.insert = (data, cb) => {
    conn.query('insert into movie set ?', data, cb)
}

MovieModel.update = (data, cb) => {
    conn.query('update movie set ? where movie_id=?', [data, data.movie_id], cb)
}

MovieModel.save = (data, cb) => {
    conn.query('select * from movie where movie_id=?', data.movie_id, (err, rows) => {
        if (err) {
            return err
        } else {
            return (rows.length == 1) ? conn.query('update movie set ? where movie_id=?', [data, data.movie_id], cb) :
                conn.query('insert into movie set ?', data, cb)
        }
    })
}

MovieModel.delete = (id, cb) => {
    conn.query('delete from movie where movie_id=?', id, cb)
}

module.exports = MovieModel