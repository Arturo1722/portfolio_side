import { Link } from "react-router-dom";
import Profile from "../../assets/logo_au.jpg";
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="home section grid">
        <img src={Profile} alt="Imagen perfil" className="home__img" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>Soy Arturo Monroy D.</span> Web Developer
            </h1>
            <p className="home__description">
              Soy un desarrollador Front-End en busca de integrarme en equipos dinámicos, donde pueda aportar
              mis habilidades y aprender de otros profesionales destacados. 
            </p>

            <Link to='/about' className="button">
              Ver Más{' '}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>

        </div>

        <div className="color__block">
          
        </div>

      </section>
    </div>
  )
}

export default Home
