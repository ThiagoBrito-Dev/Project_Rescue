import MapVisualization from '../components/MapVisualization';
import { SideBar } from '../components/SideBar';
import { SecondaryTopBar } from '../components/SecondaryTopBar';
import Styles from '../styles/pages/Map.module.css';

function Map() {
    return (
        <div className={Styles.mapContainer}>
            <body>
                <header>
                    <SecondaryTopBar />
                </header>
                <main>
                    <section>
                        <div>
                            <SideBar />
                        </div>
                        <MapVisualization />
                    </section>
                </main>
            </body>
        </div >
    )
}

export default Map;
