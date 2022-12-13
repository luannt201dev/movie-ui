import { Player } from 'video-react';
import { ArrowBackOutlined } from "@mui/icons-material";
import Header from "../../components/Header/Header";
import MovieList from "../../components/MovieList/MovieList";
import 'video-react/dist/video-react.css';
import "./watch.scss";

export default function Watch() {
  return (
    <>
      <Header></Header>
      <main>
        <article>
          <section className="movie-watch">
            <div className="movie-watch__container">
              <Player>
                <source src="/video.mp4"/>
              </Player>
            </div>
          </section>
          <MovieList></MovieList>
        </article>
      </main>
    </>
  );
}
