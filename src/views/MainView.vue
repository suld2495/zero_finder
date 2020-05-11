<template>
    <kakao-map :addressList="addressList" :centerKey="center"/>
</template>

<script>
import KakaoMap from '../components/KakaoMap';
import { mapGetters } from 'vuex';

export default {
    components: {
        KakaoMap
    },
    computed: {
        ...mapGetters(['addressList', 'center'])
    },
    created() {
        this.$store.dispatch('FETCH_ADDRESS_LIST');
    }
}
</script>

<style>

</style>