<template>
    <div class="kakao-map">
        <vue-daum-map
            :appKey="appKey"
            :center.sync="center"
            :level.sync="level"
            :mapTypeId="mapTypeId"
            :libraries="libraries"
            @load="onLoad"
            style="width:100%;height:100%"/>
        <map-detail
        ></map-detail>    
    </div>
</template>

<script>
import VueDaumMap from 'vue-daum-map'
import MapDetail from './MapDetail';
import { geocoder } from '../kakao/Geocoder';

export default {
    components: {
        VueDaumMap,
        MapDetail
    },
    props: ['addressList'],
    watch: {
        addressList() {
            geocoder(this.map, this.addressList);   
        }
    },
    data() {
        return {
            appKey: process.env.VUE_APP_KAKAOKEY,
            center: { lat: process.env.VUE_APP_LAT, lng: process.env.VUE_APP_LNG },
            level: 3,
            mapTypeId: VueDaumMap.MapTypeId.NORMAL,
            libraries: ['services'],
            map: null
        }
    },
    methods: {
        onLoad (map) {
            this.map = map;
            
            geocoder(this.map, this.addressList);
        }
    }
}
</script>

<style scoped>
.kakao-map {height: 100%;}
</style>