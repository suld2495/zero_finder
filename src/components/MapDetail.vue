<template>
    <el-dialog :title="mapData.S_NAME" :visible.sync="dialogVisible" width="560px" :class="$mq">
        <div class="address">{{ mapData.ADDRESS }}</div>
        <div class="use-yn">
                {{ checkUseYN }}
        </div>
        <div class="container">
            <div class="detail">
                <span class="s-group">{{ mapData.S_GROUP }}</span><span class="phone">{{ mapData.PHONE }}</span>
            </div>
            <div class="map-detail">
                <i class="el-icon-edit" @click="linkNaver"></i>
                <i class="el-icon-share" @click="linkKakao"></i>
                <i class="el-icon-delete" @click="report"></i>
            </div>
        </div>
    </el-dialog>
</template>

<script>
import { EventBus } from '../EventBus';
import { reportAddress } from '../api/addressAPI';

export default {
    data() {
        return {
            dialogVisible: false,
            mapData : {}
        }
    },
    created() {
        const self = this;
        EventBus.$on('open', (mapData) => {
            self.dialogVisible = !self.dialogVisible;
            self.mapData = mapData;
        });
    },
    computed: {
        checkUseYN() {
            if (this.mapData?.use_yn === 'Y') {
                return '사용 가능';
            } else if (this.mapData?.use_yn === 'N') {
                return '사용 불가';
            } else {
                return '미확인';
            }
        }
    },
    methods: {
        linkNaver() {
            window.open(`https://map.naver.com/v5/search/${this.mapData.ADDRESS}`, "_blank");
        },
        linkKakao() {
            window.open(`https://map.kakao.com/link/map/${this.mapData.S_NAME},${this.mapData.X_COORDINATE},${this.mapData.Y_COORDINATE}`, "_blank");
        },
        report() {
            reportAddress({ S_CODE: this.mapData.S_CODE })
                .then(() => {
                    this.$message({
                        message: '신고 접수가 완료되었습니다. 감사합니다.',
                        type: 'success'
                    });
                });
        }
    }
}
</script>

<style scoped>
.address {
    font-size: 17px;margin-bottom: 30px;
}
.container span:first-child {
    margin-right: 10px;;
    background:#964b4b;
    border-radius: 7px;
    padding: 3px;
    font-size: 13px;
    color: #fff;
}

.mobile >>> .el-dialog {
    width: 90% !important;
}
.container {
    display: flex;justify-content: space-between;
}
.map-detail i {
    cursor: pointer;
}
.use-yn {
    text-align: right;
    margin-bottom: 10px;
}
</style>