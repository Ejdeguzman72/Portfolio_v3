import React from 'react';
import Axios from 'axios';

const GET_ALL_CARD_INFO = () => {
    return Axios.get(`http://localhost:8080/app/cards/all`);
}

const GET_CARD_INFO_BY_ID = (cardid:any) => {
    return Axios.get(`http://localhost:8080/app/cards/card/${cardid}`)
}

const ADD_CARD_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/cards/add-a-card`);
}

const UPDATE_CARD_INFO = (cardid:any,car:any) => {
    return Axios.put(`http://localhost:8080/app/cards/card/${cardid}`);
}

const DELETE_CARD_INFO = (cardid:any) => {
    return Axios.delete(`http://localhost:8080/app/delete-card-information/${cardid}`);
}

export default {
    GET_ALL_CARD_INFO,
    GET_CARD_INFO_BY_ID,
    ADD_CARD_INFO,
    UPDATE_CARD_INFO,
    DELETE_CARD_INFO
}