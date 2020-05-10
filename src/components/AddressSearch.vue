<template>
    <div class="address-search">
        <media :query="{ minWidth: 1024 }">
            <div>
                <div>
                    <el-select 
                        v-model="state" 
                        placeholder="Select City"
                        size="small"
                        @change="changeState">
                        <el-option
                            v-for="item in stateList"
                            :key="item.STATE"
                            :label="item.STATE_KO"
                            :value="item.STATE">
                        </el-option>
                    </el-select>
                    <el-select 
                        v-model="location" 
                        placeholder="Select Gu"
                        size="small"
                        @change="changeGu">
                        <el-option
                            v-for="item in guList"
                            :key="item.LOCATION"
                            :label="item.LOCATION_KO"
                            :value="item.LOCATION">
                        </el-option>
                    </el-select>
                </div>
                <div class="compony-search">
                    <el-input 
                        placeholder="Please input" 
                        size="small" 
                        v-model="s_name"
                        @change="changeName"></el-input>
                </div>
            </div>
        </media>
        <media :query="{ maxWidth: 1024 }">
            <div class="search-mobile">
                <el-select 
                    v-model="state" 
                    placeholder="Select City"
                    size="small"
                    @change="changeState">
                    <el-option
                        v-for="item in stateList"
                        :key="item.STATE"
                        :label="item.STATE_KO"
                        :value="item.STATE">
                    </el-option>
                </el-select>
                <el-select 
                    v-model="location" 
                    placeholder="Select Gu"
                    size="small"
                    @change="changeGu">
                    <el-option
                        v-for="item in guList"
                        :key="item.LOCATION"
                        :label="item.LOCATION_KO"
                        :value="item.LOCATION">
                    </el-option>
                </el-select>
                <el-input 
                    placeholder="Please input" 
                    size="small" 
                    v-model="s_name"
                    @change="changeName"></el-input>
            </div>
        </media>
        
    </div>    
</template>

<script>
import Media from 'vue-media';
import { mapGetters } from 'vuex';

export default {
    components: {
        Media
    },
    data() {
        return {
            state: '',
            location: '',
            s_name: ''
        }
    },
    computed: mapGetters(['stateList', 'guList']),
    created() {
        this.$store.dispatch('FETCH_STATE_LIST');
    },
    methods: {
        changeState(code) {
            this.$store.dispatch('FETCH_GU_LIST', code);
            this.address = '';
        },
        changeGu(code) {
            if (code) {
                this.$store.dispatch('FETCH_ADDRESS_LIST', { state: this.state, location: code });
            }
        },
        changeName(s_name) {
            this.$store.dispatch('FETCH_ADDRESS_LIST', { s_name });
            this.address = this.state = '';
        }
    }
}
</script>

<style scoped>
.address-search > div {display: flex;}
.address-search >>> .el-select, .compony-search {margin-left: 5px;}
.search-mobile >>> div {width: 215px;display: block;}
.address-search .search-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.address-search .search-mobile >>> .el-select,.search-mobile .compony-search {margin-left: 0;}
</style>