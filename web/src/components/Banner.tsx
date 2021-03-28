import Styles from '../styles/components/Banner.module.css';
import BannerDog from '../assets/images/banner.jpg';

function Banner() {
    return (
        <div className={Styles.container}>
            <img src={BannerDog} alt="project's banner" />
            <div><span>Sobre o Projeto</span></div>
        </div>
    )
}

export { Banner };
