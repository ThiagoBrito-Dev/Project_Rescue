import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router';
import api from '../services/api';
import { usePosition } from '../contexts/PositionContext';
import Styles from '../styles/components/OccurrenceForm.module.css';

function OccurrenceForm() {

    const history = useHistory();

    let { position } = usePosition();
    let latitude = position.latitude;
    let longitude = position.longitude;
    console.log('A posição atual do formulário é:', position);

    const [dog_breed, setDogBreed] = useState("");
    const [description, setDescription] = useState("");
    const [was_found, setWasFound] = useState(false);
    const [contact_name, setContactName] = useState("");
    const [contact_info, setContactInfo] = useState("");
    const [photos, setPhotos] = useState<File[]>([]);
    const [preview_photos, setPreviewPhotos] = useState<string[]>([]);

    function handleSelectPhotos(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            return;
        }

        const selectedPhotos = Array.from(event.target.files)

        setPhotos(selectedPhotos);

        const selectedPhotosPreview = selectedPhotos.map(photo => {
            return URL.createObjectURL(photo);
        })

        setPreviewPhotos(selectedPhotosPreview);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        //const { latitude, longitude } = position;

        const data = new FormData();

        data.append('animal_name', dog_breed);
        data.append('description', description);
        data.append('was_found', String(was_found));
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude))
        data.append('dog_breed', dog_breed);
        data.append('description', description);
        data.append('wasfound', String(was_found));
        data.append('contact_name', contact_name);
        data.append('contact_info', String(contact_info));

        photos.forEach(photo => {
            data.append('photos', photo);
        });

        await api.post('occurrences', data);

        alert("Dados gravados com sucesso!");

        history.push('/map');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={Styles.occurrenceFormContainer}>
                <div className={Styles.occurrenceFormInputsContainer}>
                    <button disabled className={Styles.titleButton}>Registre um animal perdido</button>

                    <div className={Styles.occurrenceFormInput}>
                        <button disabled className={Styles.warningButton}><span>Informe a localização do animal no mapa</span></button>
                    </div>


                    <div className={Styles.occurrenceFormInput}>
                        <input
                            type="hidden"
                            id="latitude"
                            value={latitude}
                        />
                    </div>

                    <div className={Styles.occurrenceFormInput}>
                        <input
                            type="hidden"
                            id="longitude"
                            value={longitude}
                        />
                    </div>

                    <div className={Styles.occurrenceFormInput}>
                        <label htmlFor="was_found">Status do registro</label>

                        <div className={Styles.statusButton}>
                            <button
                                type="button"
                                className={was_found ? `${Styles.active}` : ''}
                                onClick={() => setWasFound(true)}
                            >
                                Encontrado
                            </button>
                            <button
                                type="button"
                                className={!was_found ? `${Styles.active}` : ''}
                                onClick={() => setWasFound(false)}
                            >
                                Perdido
                            </button>
                        </div>

                    </div>

                    <div className={Styles.occurrenceFormInput}>
                        <label htmlFor="dog_breed">Raça do animal</label>

                        <input
                            id="dog_breed"
                            value={dog_breed}
                            onChange={event => setDogBreed(event.target.value)}
                        />

                    </div>

                    <div className={Styles.occurrenceFormInput}>
                        <label htmlFor="description">Descrição</label>

                        <textarea
                            id="description"
                            value={description}
                            maxLength={300}
                            onChange={event => setDescription(event.target.value)}
                        />

                    </div>

                    <div className={Styles.occurrenceFormInput}>
                        <label htmlFor="contact_name">Nome para contato</label>

                        <input
                            id="contact_name"
                            value={contact_name}
                            onChange={event => setContactName(event.target.value)}
                        />

                    </div>

                    <div className={Styles.occurrenceFormInput}>
                        <label htmlFor="contact_info">Informação para contato</label>

                        <input
                            id="contact_info"
                            value={contact_info}
                            onChange={event => setContactInfo(event.target.value)}
                        />

                    </div>

                    <div className={Styles.occurrenceFormInput}>
                        <label htmlFor="photos" className={Styles.labelPhotos}>Fotos</label>

                        <div className={Styles.photosContainer}>
                            {preview_photos.map(photo => (
                                <img key={photo} src={photo} alt="animal's register" />
                            ))}
                            <label htmlFor="photo[]" className={Styles.newPhoto}>
                                <FiPlus size={24} color="#ef8f00" />
                            </label>
                        </div>

                        <input multiple onChange={handleSelectPhotos} type="file" id="photo[]" />
                    </div>

                    <button type="submit" className={Styles.submitButton}>
                        Confirmar
                    </button>
                </div>
            </form>
        </div >
    );
}

export { OccurrenceForm };
