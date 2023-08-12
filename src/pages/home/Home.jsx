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
              <span>Soy Arturo Monroy .D</span> Web Developer
            </h1>
            <p className="home__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum corrupti, fugiat excepturi libero iste fugit voluptatibus 
              assumenda repellendus autem id maxime accusantium magnam est ipsam culpa ullam 
              velit ad eligendi!
            </p>

            <Link to='/about' className="button">
              More About Me{' '}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Home
