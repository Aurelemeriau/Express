// const express = require('express');

const app = require('./app');

const port = 5000;

// const movies = [
//     {
//       id: 1,
//       title: "Citizen Kane",
//       director: "Orson Wells",
//       year: "1941",
//       color: false,
//       duration: 120,
//     },
//     {
//       id: 2,
//       title: "The Godfather",
//       director: "Francis Ford Coppola",
//       year: "1972",
//       color: true,
//       duration: 180,
//     },
//     {
//       id: 3,
//       title: "Pulp Fiction",
//       director: "Quentin Tarantino",
//       year: "1994",
//       color: true,
//       duration: 180,
//     },
//   ];



//   app.get("/", (req, res) => {
//     res.send("Welcome to my favourite movie list");
//   });

//   const getMovies = (req, res) => {
//     res.status(200).json(movies);
//   };

//   app.get("/api/movies", getMovies);  

//   const getId = (req, res) => {

//    const MovieId = movies.find((movie) => movie.id==req.params.id)
    
//         if (MovieId===undefined) {
//             return res.status(404).send("Not Found");
//         }
//         else {
//             return res.status(200).json(MovieId);
//         }
//     } 
//   ; 
  
//   app.get("/api/movies/:id", getId);

app.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });