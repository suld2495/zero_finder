import axios from 'axios';

const config = {
    baseUrl: process.env.VUE_APP_API_URL,
    surfix: process.env.VUE_APP_API_SURFIX
}

function fetchAddressList(value) {
    if (process.env.NODE_ENV === 'development') {
        if (value.s_name) {
            return axios.get(`${config.baseUrl}/address/${value.s_name}${config.surfix}`, value);
        } else {
            return axios.get(`${config.baseUrl}/address/${value.state}/${value.location}${config.surfix}`, value);
        }
    } else {
        return axios.post(`${config.baseUrl}/search_name${config.surfix}`, value);
    }
}

function fetchStateList() {
    if (process.env.NODE_ENV === 'development') {
        return axios.get(`${config.baseUrl}/search_address${config.surfix}`);
    } else {
        return axios.post(`${config.baseUrl}/search_address${config.surfix}`);
    }

}

function fetchGuList(location) {
    if (process.env.NODE_ENV === 'development') {
        return axios.get(`${config.baseUrl}/detail_address/${location}${config.surfix}`);
    } else {
        return axios.post(`${config.baseUrl}/search_address${config.surfix}`, { location });
    }
}

function storeAddress(param) {
    if (process.env.NODE_ENV === 'development') {
        return new Promise(resolve => {
            resolve('통과');
        });
    } else {
        return axios.post(`${config.baseUrl}/insert_pend`, param);
    }

}

export {
    fetchAddressList,
    fetchStateList,
    fetchGuList,
    storeAddress,
}