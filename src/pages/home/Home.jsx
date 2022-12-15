import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMoviesAPI } from "../../API/movies.api";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  // // const state = useSelector(state => state)
  // // console.log("state: ", state)
  // const dispatch = useDispatch();
  // const loadMovie = async () => {
  //   await getMoviesAPI(dispatch); 
  // }
  // useEffect(()=> {
  //   loadMovie()
  // }, [])
  return (
    <>
      <Header></Header>
      <main>
        <article>
          <Hero></Hero>
          <MovieList></MovieList>
        </article>
      </main>
    </>
  );
};

export default Home;
