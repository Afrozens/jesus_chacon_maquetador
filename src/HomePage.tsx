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
          <Title line="Disfruta de la " lineTwo="mejor música" />
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
        <Title line="Los mas escuchados" isCenter={true} />
        <Paragraph isCenter={true}>
          Disfruta de tu música a un solo click y descube que discos has
          guardado dentro de “mis álbumes”
        </Paragraph>
        <Slider />
      </section>

      <footer id="footer" className="footer">
        <article>
          <Title line="Disfruta de la " lineTwo="mejor música" />
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
