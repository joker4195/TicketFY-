import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MovieBox from "../components/MoviesBox";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../routes/MoviesStyles.css";
// import { Navbar } from "react-bootstrap";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=694b89d9c0178cf27031cb60407c5555";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=694b89d9c0178cf27031cb60407c5555&query";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=694b89d9c0178cf27031cb60407c5555&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar bg="dark " variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <h2>TicketeFY</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="/home">Home</Nav.Link> */}
             {/* <Nav.Link href="/">Concerts</Nav.Link>  */}
              <Nav.Link href="/movies">Movies</Nav.Link>
              {/* <Nav.Link href="/sports">Sports</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link> */}
            </Nav>
            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>
              <Button variant="outline-secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2 className="error">Sorry !! No Movies Found</h2>
        )}

        <div  id="movie-list">
          {/* <button id="next-page">Next Page </button> */}
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default Movies;
