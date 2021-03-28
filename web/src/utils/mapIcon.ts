import Leaflet from 'leaflet';

import rescueMapMarker from '../assets/icons/rescue-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: rescueMapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default mapIcon;
