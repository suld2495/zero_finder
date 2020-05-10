<template>
    <div class="daum-postcode-modal" v-if="visible" @click.self="handleWrapperClick">
        <div class="daum-postcode-modal__inner">
            <DaumPostcode
                :on-complete=handleAddress
                />
        </div>
    </div>
</template>

<script>
import DaumPostcode from 'vuejs-daum-postcode'

export default {
    components: {
        DaumPostcode
    },
    props: {
        visible: {
            type: Boolean,
            require: true,
            default: false
        },
    },
    methods: {
        async handleAddress(data) {
            let fullAddress = data.address
            let extraAddress = ''
            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname
                }
                if (data.buildingName !== '') {
                    extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName)
                }
                fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '')
            }

            this.$emit('inputAddress', { address: fullAddress, state: data.sido });
            this.handleWrapperClick();
        },
        handleWrapperClick() {
            this.$emit('update:visible', false)
        },
    }
}
</script>

<style scoped>
.daum-postcode-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}
.daum-postcode-modal__inner {
    position: relative;
    margin: 0 auto 50px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
    margin-top: 12vh;
}
</style>