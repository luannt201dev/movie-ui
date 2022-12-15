import React from "react";

export default function Header() {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>

        <a href="./index.html" className="logo">
          {/* <img src="/images/logo.svg" alt="Filmlane logo" /> */}
        </a>

        <div className="header-actions">
          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <div className="lang-wrapper">
            <label for="language">
              <ion-icon name="globe-outline"></ion-icon>
            </label>

            <select name="language" id="language">
              <option value="en">EN</option>
              <option value="au">AU</option>
              <option value="ar">AR</option>
              <option value="tu">TU</option>
            </select>
          </div>

          <button className="btn btn-primary">Sign in</button>
        </div>

        <button className="menu-open-btn" data-menu-open-btn>
          <ion-icon name="reorder-two"></ion-icon>
        </button>

        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="./index.html" className="logo">
              <img src="/images/logo.svg" alt="Filmlane logo" />
            </a>

            <button className="menu-close-btn" data-menu-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <a href="./index.html" className="navbar-link">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Movie
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Tv Show
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Web Series
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Pricing
              </a>
            </li>
          </ul>

          <ul className="navbar-social-list">
            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
