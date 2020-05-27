// import { EventBus } from '../EventBus';

let markers = [];

function geocoder(map, addressList) {
    if (map) {
        removeAllMarker();
        createMarker(map, addressList);
    }
}

function createMarker(map, addressList) {
    var clusterer = new window.kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 10 // 클러스터 할 최소 지도 레벨 
    });

    var markers = addressList.map(function(position) {
        return new window.kakao.maps.Marker({
            position : new window.kakao.maps.LatLng(position.X_COORDINATE, position.Y_COORDINATE)
        });
    });

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
}

// function createMarker(map, mapData) {
//     var coords = new window.kakao.maps.LatLng(mapData.X_COORDINATE, mapData.Y_COORDINATE);

//     var marker = new window.kakao.maps.Marker({
//         map: map,
//         position: coords
//     });

//     window.kakao.maps.event.addListener(marker, 'click', function() {
//         EventBus.$emit('open', mapData);
//     });

//     marker.setMap(map);
//     markers.push(marker);
// }

function removeAllMarker() {
    for (const marker of markers) {
        marker.setMap(null);
    }
}

function changeMarker(map, check, addressList) {
    let newList = addressList.filter((address) => {
        if (check === 'Y') {
            return address.use_yn === 'Y' || address.use_yn === 'N';
        } else {
            return !address.use_yn
        }
    });
    geocoder(map, newList);
}

export { 
    geocoder, 
    changeMarker
};