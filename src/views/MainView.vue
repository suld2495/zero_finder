<template>
    <kakao-map :addressList="addressList"/>
</template>

<script>
import KakaoMap from '../components/KakaoMap';
import { mapGetters } from 'vuex';

export default {
    components: {
        KakaoMap
    },
    computed: {
        ...mapGetters(['addressList'])
    },
    created() {
        this.$store.dispatch('FETCH_ADDRESS_LIST');
    }
}
</script>

<style>

</style>