<template>
    <el-dialog :title="$t('message.registerTitle')" :visible.sync="dialogFormVisible" width="560px" :class="$mq">
        <el-form :model="form" label-width="110px">
            <el-form-item label="상호명 입력">
                <el-input v-model="form.s_name" placeholder="상호명을 입력해주세요."></el-input>
            </el-form-item>
            <el-form-item label="주소 입력">
                <el-input v-model="form.address" placeholder="주소를 입력해주세요."></el-input>
            </el-form-item>
            <el-form-item label="전화번호 입력">
                <el-input v-model="form.phone" placeholder="전화번호를 입력해주세요."></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="closeDialogForm">Confirm</el-button>
        </span>
    </el-dialog>    
</template>

<script>
import { storeAddress } from '../api/addressAPI';

export default {
    props: {
        value: Boolean
    },
    data() {
        return {
            form: {
                address: '',
                s_name: '',
                phone: '',
            },
            dialogFormVisible: false,
        }
    },
    methods: {
        async closeDialogForm() {
            if (this.form.s_name) {
                let result = await storeAddress(this.form);
                
                if (result) {
                    this.$message({
                        message: '등록 신청이 완료되었습니다. 감사합니다.',
                        type: 'success'
                    });
                    this.form.address = this.form.s_name = this.form.phone = ''
                    this.dialogFormVisible = false;
                } else {
                    this.$message.error('오류가 발생하였습니다. 관리자에게 문의해 주시기 바랍니다.');
                }
            } else {
                this.$message.error('상호명을 입력해 주시기 바랍니다.');
            }
        }
    }
}
</script>

<style scoped>
.address-search {display: flex;margin-bottom: 5px;}
.address-search button {margin-left: 5px;}
.mobile >>> .el-dialog {width: 90% !important;}
.mobile >>> .el-form-item__content {margin-left: 0 !important;}
.mobile >>> .el-form-item__label {text-align: left;}
</style>