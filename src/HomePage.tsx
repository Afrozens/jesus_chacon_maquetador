import {Form, Header, Paragraph, Parallax, Slider, Title} from "./components";
import {Toaster} from "react-hot-toast";

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
            <a href="#footer">Contacta</a>
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
        <Slider />
      </section>

      <footer id="footer" className="footer">
        <article>
          <Title>
            Disfruta de la <b>mejor música</b>
          </Title>
          <p className="footer-paragraph">
            Escríbenos en el siguiente formulario y un asesor se pondrá en
            contacto contigo.
          </p>
        </article>
        <Form />
      </footer>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default HomePage;
