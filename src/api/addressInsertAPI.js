import axios from 'axios';

const config = {
    baseUrl: process.env.VUE_APP_API_URL,
    surfix: process.env.VUE_APP_API_SURFIX,
    kakaoKey: process.env.VUE_APP_KAKAOKEY
}

function insert(param) {
    return axios.post(`${config.baseUrl}/insert`, param);
}

function select() {
    return axios.get(`${config.baseUrl}/select${config.surfix}`);
}

function search(address) {
    let kakaoURL = `https://dapi.kakao.com/v2/local/search/address.json?&query=${address}`;
    return axios.get(kakaoURL, {
        headers: { 'Authorization': `KakaoAK ${config.kakaoKey}` }
    })
}

export {
    select,
    insert,
    search
}