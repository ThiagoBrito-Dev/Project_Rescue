import Styles from '../styles/components/SecondaryTopBar.module.css';
import IconLogo from '../assets/icons/logo1.png';
import { Link } from 'react-router-dom';

function SecondaryTopBar() {
    return (
        <div className={Styles.container}>
            <nav>
                <ul className={Styles.unorderedList}>
                    <span>
                        Project
                        <Link to="/">
                            <img src={IconLogo} alt="application's logo icon" />
                        </Link>
                        Rescue
                    </span>
                </ul>
            </nav>
        </div>
    )
}

export { SecondaryTopBar };
