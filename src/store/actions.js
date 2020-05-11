import { fetchAddressList, fetchStateList, fetchGuList } from '../api/addressAPI';

export default {
    FETCH_ADDRESS_LIST({ commit }, value = { value: {} }) {
        fetchAddressList(value.value)
            .then(result => {
                commit('fetchAddressList', { result: result.data, center: value.center });
            });
    },
    FETCH_ADDRESS_LIST_WITH_NAME({ commit }, value) {
        fetchAddressList(value)
            .then(result => {
                commit('fetchAddressListWithName', { list: result.data });
            });
    },
    FETCH_STATE_LIST({ commit }) {
        fetchStateList()
            .then(result => {
                commit('fetchStateList', result.data);
            })
    },
    FETCH_GU_LIST({ commit }, param) {
        fetchGuList(param)
            .then(result => {
                commit('fetchGuList', result.data);
            })
    }
}