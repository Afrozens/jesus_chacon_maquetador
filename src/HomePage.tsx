import React from "react";
import {Header} from "./components";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <img
          src="/arrow.svg"
          alt="arrow inclined image"
          className="main-avatar"
        />
        <article>
          <h1 className="main-title">
            Disfruta de la <b>mejor música</b>
          </h1>
          <p className="main-subtitle">
            Accede a tu cuenta para guardar tus albumes favoritos.
          </p>
          <button className="main-btn">
            Contacta
            <img src="/arrow-left.svg" alt="arrow white left" />
          </button>
        </article>
      </main>
      <section className="slider">sd</section>
    </>
  );
};

export default HomePage;
