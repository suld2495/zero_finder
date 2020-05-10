<template>
    <el-dialog :title="S_NAME" :visible.sync="dialogVisible" width="560px" :class="$mq">
        <p class="address">{{ ADDRESS }}</p>
        <p class="container"><span class="s-group">{{ S_GROUP }}</span><span class="phone">{{ PHONE }}</span></p>
    </el-dialog>
</template>

<script>
import { EventBus } from '../EventBus';

export default {
    data() {
        return {
            dialogVisible: false,
            S_GROUP: '',
            ADDRESS: '',
            S_NAME: '',
            PHONE: ''
        }
    },
    created() {
        const self = this;
        EventBus.$on('open', ({ S_GROUP = '음식점', ADDRESS = '서울 영등포구 의사당대로 1', S_NAME = '국회의사당', PHONE = '010-1234-5678' }) => {
            self.dialogVisible = !self.dialogVisible;
            self.S_GROUP = S_GROUP;
            self.ADDRESS = ADDRESS;
            self.S_NAME = S_NAME;
            self.PHONE = PHONE;
        });
    }
}
</script>

<style scoped>
.address {font-size: 17px;margin-bottom: 30px;}
.container span:first-child {
    margin-right: 10px;;
    background:#964b4b;
    border-radius: 7px;
    padding: 3px;
    font-size: 13px;
    color: #fff;
}

.mobile >>> .el-dialog {width: 90% !important;}
</style>