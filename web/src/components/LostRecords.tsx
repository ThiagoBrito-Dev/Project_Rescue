import Styles from '../styles/components/LostRecords.module.css';
import LostRecordsIcon from '../assets/icons/lost.png';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface Occurrence {
    animal_name: string,
    latitude: number,
    longitude: number,
    description: string,
    photos: string,
    was_found: boolean,
    contact_name: string,
    contact_info: string
}

interface OccurrenceParams {
    id: string;
}

function LostRecords() {
    const params = useParams<OccurrenceParams>();
    const [occurrence, setOccurrence] = useState<Occurrence>();

    useEffect(() => {
        api.get(`occurrences/${params.id}`).then(response => {
            setOccurrence(response.data);
        });
    }, [params.id]);

    if (!occurrence) {
        return <div className={Styles.lostRecordsContainer}>
            <div className={Styles.lostRecordsHeader}>
                <button>Visualizar animais encontrados
                    <img
                        src={LostRecordsIcon}
                        alt="lost animal icon"
                    />
                </button>
            </div>
        </div>
    }
    else if (occurrence.was_found === false) {
        return (
            <div className={Styles.lostRecordsContainer}>
                <div className={Styles.lostRecordsHeader}>
                    <button>Visualizar animais encontrados
                        <img
                            src={LostRecordsIcon}
                            alt="lost animal icon"
                        />
                    </button>

                    <div className={Styles.lostRecordsList}>
                        <span>{occurrence.animal_name}</span>
                    </div>
                    <div className={Styles.descriptionField}>
                        <span>{occurrence.description}</span>
                    </div>
                    <div className={Styles.descriptionField}>
                        <span>{occurrence.contact_name}</span>
                        <span>:&nbsp;</span>
                        <span>{occurrence.contact_info}</span>
                    </div>

                    <br />
                    <br />
                    <hr className={Styles.listDivisor} /> {/* <- end line */}
                    <br />
                    <br />

                </div>
            </div>
        )
    }
    return <div className={Styles.lostRecordsContainer}>
        <div className={Styles.lostRecordsHeader}>
            <button>Visualizar animais encontrados
                    <img
                    src={LostRecordsIcon}
                    alt="lost animal icon"
                />
            </button>
        </div>
    </div>
}

export { LostRecords };
