<template>
    <button @click="handleClick">작업 시작하기</button>
</template>

<script>
import { select, insert, search } from '../api/addressInsertAPI';

export default {
    methods: {
        async handleClick() {
            select().then(async ({ data }) => {
                let list = [];

                for (const item of data) {
                    let response = await search(item.ADDRESS);
                    let result = response.data.documents[0];
                    if (result) list.push({ S_CODE: item.S_CODE, X_COORDINAME: result.y, Y_COORDINAME: result.x });
                }

                insert({ list });
            });
        }
    }
}
</script>

<style scoped>
button {margin-top: 100px;}
</style>