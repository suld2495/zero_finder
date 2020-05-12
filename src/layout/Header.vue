<template>
    <header class="header-box">
        <div class="title-con">
            <h1 class="title">공식 제로페이 가맹점</h1>
        </div>
        <media :query="{ minWidth: 1024 }">
            <div class="nav">
                <ol>
                    <li><address-search/></li>
                    <li @click="openDialog" class="address-register">{{$t('message.registerTitle')}}</li>
                </ol>
            </div>
        </media>
        <media 
            :query="{ maxWidth: 1024 }">
            <div class="nav-mobile">
                <i class="el-icon-search" @click="openNav"></i>
                <i class="el-icon-edit" @click="openDialog"></i>
                <div class="nav-mobile-container" v-if="navVisible">
                    <div>
                        <address-search
                            @close="openNav"
                        />
                    </div>
                </div>
            </div>
        </media>
    </header>
</template>

<script>
import Media from 'vue-media'
import AddressSearch from '../components/AddressSearch'; 

export default {
    components: {
        AddressSearch,
        Media
    },
    data() {
        return {
            navVisible: false
        }
    },
    methods: {
        openDialog() {
            this.$emit('open');
        },
        openNav() {
            this.navVisible = !this.navVisible;
        }
    }
}

</script>

<style scoped>
.header-box {    
    display: flex;
    height: 50px;
    line-height: 50px;
    justify-content: space-between;
    padding: 0 30px;
    background: #ff8b8b;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    box-sizing: border-box;
}
.title {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
}
.nav ol {display: flex;}
.nav ol li {
    font-size: 15px;
    color: #7b7b7b;
    cursor: pointer;
    padding: 0 10px;
    font-weight: bold;
}
.nav ol li:hover {
    color: #dadada;
} 
.address-register {line-height: 55px;}
.nav-mobile {
    display: flex;
    align-items: center;
    margin-right: -20px;
}
.nav-mobile i {font-size: 26px; color: #fff;cursor: pointer;font-size: 22px;margin-left: 10px;}
.nav-mobile-container {
    width: 100%;
    height: 180px;
    position: fixed;
    left: 0;
    top: 50px;
    background: #fff;
    animation-duration: 500ms;
    animation-name: padein;
    animation-direction: alternate;
    padding-top:30px;
}
.address-register-mobile {text-align: center;}
@keyframes padein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>