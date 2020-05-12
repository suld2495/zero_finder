export default {
    fetchAddressList(state, value) {
        state.addressList = value.list;
        state.center = value.center;
    },
    fetchStateList(state, value) {
        state.stateList = value;
    },
    fetchGuList(state, value) {
        state.guList = value;
    },
    fetchAddressListWithName(state, { list }) {
        state.addressList = list;
        state.center = { x: list[0].X_COORDINATE, y: list[0].Y_COORDINATE };
    }
}