import { Link } from 'react-router-dom';
import Styles from '../styles/components/SideBar.module.css';
import HomeOption from '../assets/icons/logo1.png';
import MapOption from '../assets/icons/map1.png';
import RecordsOption from '../assets/icons/records1.png';
import RegistersOption from '../assets/icons/search.png';

function SideBar() {
    return (
        <div className={Styles.container}>
            <div className={Styles.sideBarContainer}>
                <div className={Styles.sideBarFirstItem}>
                    <img
                        className={Styles.sideBarFirstImage}
                        src={HomeOption}
                        alt="sidebar's home logo"
                    />
                    <div>
                        <Link to="/" className={Styles.sideBarFirstOption}>Home</Link>
                    </div >
                </div>

                <div className={Styles.sideBarSecondItem}>
                    <img
                        className={Styles.sideBarSecondImage}
                        src={MapOption}
                        alt="sidebar's map icon"
                    />
                    <div>
                        <Link to="/map" className={Styles.sideBarSecondOption}>Ir para o mapa</Link>
                    </div>
                </div>

                <div className={Styles.sideBarThirdItem}>
                    <img
                        className={Styles.sideBarThirdImage}
                        src={RecordsOption}
                        alt="sidebar's records icon"
                    />
                    <div>
                        <Link to="/occurrences" className={Styles.sideBarThirdOption}>Registrar animais</Link>
                    </div>
                </div>

                <div className={Styles.sideBarFourthItem}>
                    <img
                        className={Styles.sideBarFourthImage}
                        src={RegistersOption}
                        alt="sidebar's search icon"
                    />
                    <div>
                        <Link to="/occurrences/:id" className={Styles.sideBarFourthOption}>Registros</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { SideBar };
