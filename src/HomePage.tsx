import React from "react";
import {CardSlider, Header, Paragraph, Parallax, Title} from "./components";

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
          <Title>
            Disfruta de la <b>mejor música</b>
          </Title>
          <Paragraph>
            Accede a tu cuenta para guardar tus albumes favoritos.
          </Paragraph>
          <button className="main-btn">
            Contacta
            <img src="/arrow-left.svg" alt="arrow white left" />
          </button>
        </article>
      </main>

      <section className="section-parallax">
        <Parallax />
      </section>

      <section className="section-album">
        <Title isCenter={true}>Los mas escuchados</Title>
        <Paragraph isCenter={true}>
          Disfruta de tu música a un solo click y descube que discos has
          guardado dentro de “mis álbumes”
        </Paragraph>
        <CardSlider />
      </section>

      <footer className="footer">
        <article>
          <Title>
            Disfruta de la <b>mejor música</b>
          </Title>
          <p className="footer-paragraph">
            Escríbenos en el siguiente formulario y un asesor se pondrá en
            contacto contigo.
          </p>
        </article>
      </footer>
    </>
  );
};

export default HomePage;
