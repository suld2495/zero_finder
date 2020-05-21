<template>
    <button @click="handleClick">작업 시작하기</button>
</template>

<script>
import { select, insert, search } from '../api/addressInsertAPI';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            state: '서울특별시'
        }
    },
    computed: {
        ...mapGetters(['guList'])
    },
    methods: {
        async handleClick() {
            select().then(async ({ data }) => {
                for (const item of data) {
                    let location = this.getLocation(item.LOCATION);
                    let response = await search(`${this.state} ${location} ${item.ADDRESS}`);
                    let result = response.data.documents[0];
                    if (result) {
                        item.X_COORDINATE = result.y;
                        item.Y_COORDINATE = result.x;
                    }
                }

                insert({ data });
            });
        },
        getLocation(code) {
            return this.guList.find((gu) => gu.LOCATION === code)?.LOCATION_KO;
        }
    }
}
</script>

<style scoped>
button {margin-top: 100px;}
</style>