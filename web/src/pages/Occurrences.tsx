import { OccurrenceForm } from '../components/OccurrenceForm';
import RescueMap from '../components/RescueMap';
import { TopBar } from '../components/TopBar';
import PositionProvider from '../contexts/PositionContext';
import Styles from '../styles/pages/Occurrences.module.css';

interface OccurrencesProps {
    position: {
        latitude: number;
        longitude: number;
    },
    setPosition: React.Dispatch<React.SetStateAction<{
        latitude: number;
        longitude: number;
    }>>
    latitude: number;
    longitude: number
}

function Occurrences(props: OccurrencesProps) {
    return (
        <PositionProvider
            position={props.position}
            setPosition={props.setPosition}
        >
            <div className={Styles.occurrencesContainer}>
                <body>
                    <header>
                        <TopBar />
                    </header>
                    <main>
                        <section>
                            <RescueMap />
                            <div>
                                <OccurrenceForm />
                            </div>
                        </section>
                    </main>
                </body>
            </div>
        </PositionProvider>
    )
}

export default Occurrences;
