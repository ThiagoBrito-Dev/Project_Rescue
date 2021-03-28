import { Link } from 'react-router-dom';
import Styles from '../styles/components/TopBar.module.css';
import IconLogo from '../assets/icons/logo1.png';

function TopBar() {
    return (
        <div className={Styles.container}>
            <nav>
                <ul className={Styles.unorderedList}>
                    <Link to="/map">
                        <li><button>Ir para o mapa</button></li>
                    </Link>
                    <span>
                        Project
                        <Link to="/">
                            <img src={IconLogo} alt="application's logo icon" />
                        </Link>
                        Rescue
                    </span>
                    <Link to="/occurrences/:id">
                        <li><button>Ver registros</button></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export { TopBar };
