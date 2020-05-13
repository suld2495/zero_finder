<template>
    <div class="kakao-map">
        <div class="checkbox">
            <el-radio-group v-model="checkboxGroup" @change="handleChangeBox">
                <el-radio-button label="Y">전체</el-radio-button>
                <el-radio-button label="N">찐</el-radio-button>
            </el-radio-group>
        </div>
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
import { geocoder, changeMarker } from '../kakao/Geocoder';

export default {
    components: {
        VueDaumMap,
        MapDetail
    },
    props: ['addressList', 'centerKey'],
    watch: {
        addressList() {
            geocoder(this.map, this.addressList);   
            this.checkboxGroup = this.initCheckbox();
            this.level = 6;
            this.$nextTick(() => {
                this.setCenter();    
            });
        }
    },
    data() {
        return {
            appKey: process.env.VUE_APP_KAKAOKEY,
            center: { lat: process.env.VUE_APP_LAT, lng: process.env.VUE_APP_LNG },
            level: 3,
            mapTypeId: VueDaumMap.MapTypeId.NORMAL,
            libraries: ['services'],
            map: null,
            checkboxGroup: this.initCheckbox(),
        }
    },
    methods: {
        onLoad (map) {
            this.map = map;
            
            geocoder(this.map, this.addressList);
            this.setCenter();
        },
        setCenter() {
            if (!this.centerKey || !this.centerKey.x || !this.centerKey.y) return;
            let moveLatLon = new window.kakao.maps.LatLng(this.centerKey.x, this.centerKey.y);
            this.map.panTo(moveLatLon);        
        },
        handleChangeBox(value) {
            changeMarker(this.map, value, this.addressList);
        },
        initCheckbox() {
            return 'Y';
        }
    }
}
</script>

<style scoped>
.kakao-map {height: 100%;}
.checkbox {position: fixed; top: 55px;left: 3px; z-index: 100;}
</style>