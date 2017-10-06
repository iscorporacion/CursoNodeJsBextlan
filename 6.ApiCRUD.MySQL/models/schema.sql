DROP DATABASE IF EXISTS movies;

CREATE DATABASE IF NOT EXISTS movies;

USE movies;

CREATE TABLE IF NOT EXISTS movie(
    movie_id varchar(9) primary key,
    title varchar(100),
    release varchar(4),
    rating decimal(2,1),
    image varchar(255)
);
