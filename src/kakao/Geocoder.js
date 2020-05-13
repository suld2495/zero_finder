import { EventBus } from '../EventBus';

let markers = [];

function geocoder(map, addressList) {
    if (map) {
        removeAllMarker();
        for (const address of addressList) {
            createMarker(map, address);
        }
    }
}

function createMarker(map, mapData) {
    var coords = new window.kakao.maps.LatLng(mapData.X_COORDINATE, mapData.Y_COORDINATE);

    var marker = new window.kakao.maps.Marker({
        map: map,
        position: coords
    });

    window.kakao.maps.event.addListener(marker, 'click', function() {
        EventBus.$emit('open', mapData);
    });

    marker.setMap(map);
    markers.push(marker);
}

function removeAllMarker() {
    for (const marker of markers) {
        marker.setMap(null);
    }
}

function changeMarker(map, check, addressList) {
    let newList = addressList.filter((address) => address.use_yn === check);
    geocoder(map, newList);
}

export { 
    geocoder, 
    changeMarker 
};