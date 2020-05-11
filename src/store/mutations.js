export default {
    fetchAddressList(state, value) {
        state.addressList = value.result;
        state.center = value.center;
    },
    fetchStateList(state, value) {
        state.stateList = value;
    },
    fetchGuList(state, value) {
        state.guList = value;
    },
    fetchAddressListWithName(state, value) {
        state.addressList = value;
        state.center = { x: value.X_COORDINATE, y: value.Y_COORDINATE };
    }
}