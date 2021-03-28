import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import Styles from '../styles/components/RescueMap.module.css';
import { usePosition } from '../contexts/PositionContext';

import api from '../services/api';

interface Occurrence {
    id: number;
    latitude: number;
    longitude: number;
    animal_name: string;
    was_found: boolean;
    highlighter_color: string
}

function RescueMap() {
    const [occurrences, setOccurrences] = useState<Occurrence[]>([]);

    let { position, setPosition } = usePosition();

    console.log("A posição atual do mapa é:", position)

    useEffect(() => {
        api.get('occurrences/:id').then(response => {
            setOccurrences(response.data);
        });
    }, []);

    function HandleMapClick() {
        useMapEvent('click', (event) => {
            const { lat, lng } = event.latlng;
            return setPosition({
                latitude: lat,
                longitude: lng,
            })
        })
        return null
    }

    return (
        <div className={Styles.rescueMapContainer}>
            <MapContainer
                center={[-23.5489, -46.6388]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <HandleMapClick />
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                {position.latitude !== 0 && (
                    <Marker
                        interactive={false}
                        icon={mapIcon}
                        position={[position.latitude, position.longitude]}
                    />
                )}
                {occurrences.map(occurrence => {
                    return (
                        <Marker
                            key={occurrence.id}
                            icon={mapIcon}
                            position={[occurrence.latitude, occurrence.longitude]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240} maxWidth={240}
                                className={Styles.rescueMapPopup}
                                keepInView={true}
                            >
                                <Link to={`/occurrences/${occurrence.id}`} style={{ color: `${occurrence.highlighter_color}` }}>
                                    Raça: {occurrence.animal_name},
                                    Status do registro: {occurrence.was_found}
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div >
    )
}

export default RescueMap;
