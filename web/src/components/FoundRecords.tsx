import Styles from '../styles/components/FoundRecords.module.css';
import FoundRecordsIcon from '../assets/icons/find.png';
import api from '../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

function FoundRecords() {
  const params = useParams<OccurrenceParams>();
  const [occurrence, setOccurrence] = useState<Occurrence>();

  useEffect(() => {
    api.get(`occurrences/${params.id}`).then(response => {
      setOccurrence(response.data);
    });
  }, [params.id]);

  if (!occurrence) {
    return <div className={Styles.foundRecordsContainer}>
      <div className={Styles.foundRecordsHeader}>
        <button>Visualizar animais encontrados
                  <img
            src={FoundRecordsIcon}
            alt="lost animal icon"
          />
        </button>
      </div>
    </div>
  }
  else if (occurrence.was_found === true) {
    return (
      <div className={Styles.foundRecordsContainer}>
        <div className={Styles.foundRecordsHeader}>
          <button>Visualizar animais encontrados
                      <img
              src={FoundRecordsIcon}
              alt="lost animal icon"
            />
          </button>

          <div className={Styles.foundRecordsList}>
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
  return <div className={Styles.foundRecordsContainer}>
    <div className={Styles.foundRecordsHeader}>
      <button>Visualizar animais encontrados
                  <img
          src={FoundRecordsIcon}
          alt="lost animal icon"
        />
      </button>
    </div>
  </div>
}

export { FoundRecords };
