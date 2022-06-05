import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const Home = () => {
  return (
    <div className="home-conteiner">
      <div className="base-card home-card">
        <div className="home-content-conteiner">
          <div>
            <h1>Conheça o melhor catalogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado
            </p>
          </div>
          <Link to="/products">
            <ButtonIcon />
          </Link>
        </div>
        <div className="home-image-conteiner">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
