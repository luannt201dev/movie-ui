import React from "react";

export default function MovieList() {
  return (
    <section className="top-rated">
      <div className="containerMovieList">
        <p className="section-subtitle">Movies</p>

        <h2 className="h2 section-title">Top movies</h2>

        <ul className="filter-list">
          <li>
            <button className="filter-btn">Movies</button>
          </li>

          <li>
            <button className="filter-btn">TV Shows</button>
          </li>

          <li>
            <button className="filter-btn">Documentary</button>
          </li>

          <li>
            <button className="filter-btn">Sports</button>
          </li>
        </ul>

        <ul className="movies-list">
          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src="/images/movie-1.png"
                    alt="Sonic the Hedgehog 2 movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">Sonic the Hedgehog 2</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">2K</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT122M">122 min</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>7.8</data>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src="/images/movie-2.png"
                    alt="Morbius movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">Morbius</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">HD</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT104M">104 min</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>5.9</data>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src="/images/movie-3.png"
                    alt="The Adam Project movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">The Adam Project</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">4K</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT106M">106 min</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>7.0</data>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src="/images/movie-4.png"
                    alt="Free Guy movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">Free Guy</h3>
                </a>

                <time datetime="2021">2021</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">4K</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT115M">115 min</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>7.7</data>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src="/images/movie-5.png"
                    alt="The Batman movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">The Batman</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">4K</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT176M">176 min</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>7.9</data>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src="/images/movie-6.png"
                    alt="Uncharted movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">Uncharted</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">HD</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT116M">116 min</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>7.0</data>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src="/images/movie-7.png"
                    alt="Death on the Nile movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">Death on the Nile</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">2K</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT127M">127 min</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>6.5</data>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="movie-card">
              <a href="./movie-details.html">
                <figure className="card-banner">
                  <img
                    src="/images/movie-8.png"
                    alt="The King's Man movie poster"
                  />
                </figure>
              </a>

              <div className="title-wrapper">
                <a href="./movie-details.html">
                  <h3 className="card-title">The King's Man</h3>
                </a>

                <time datetime="2021">2021</time>
              </div>

              <div className="card-meta">
                <div className="badge badge-outline">HD</div>

                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT131M">131 min</time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>7.0</data>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
