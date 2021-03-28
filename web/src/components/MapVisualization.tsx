import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import rescueMapMarker from '../assets/icons/rescue-marker.svg';

import Styles from '../styles/components/MapVisualization.module.css';

const mapIcon = Leaflet.icon({
    iconUrl: rescueMapMarker,
    iconSize: [75, 75],
    iconAnchor: [29, 68],
    popupAnchor: [8, -70]
})

function MapVisualization() {
    return (
        <div className={Styles.mapPage}>
            <MapContainer
                center={[-23.5489, -46.6388]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                    icon={mapIcon}
                    position={[-23.5489, -46.6388]}
                >
                    <Popup
                        closeButton={false}
                        minWidth={240} maxWidth={240}
                        className={Styles.mapPopup}
                        keepInView={true}

                    >
                        <Link to="/occurrences">
                            <p className={Styles.popupText}>Clique aqui para fazer registros de animais perdidos e/ou abandonados</p>
                        </Link>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapVisualization;
