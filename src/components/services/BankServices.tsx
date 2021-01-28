import React from 'react';
import Axios from 'axios';

const GET_ALL_BANK_INFO = () => {
    return Axios.get(`http://localhost:8080/app/banks/all`);
}

const GET_BANK_INFO_BY_ID = (bankid:any) => {
    return Axios.get(``)
}

const ADD_BANK_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/banks/add-a-bank`);
}

const UPDATE_BANK_INFO = (bankid:any,bank:any) => {
    return Axios.put(`http://localhost:8080/app/banks/bank/${bankid}`);
}

const DELETE_BANK_INFO = (bankid:any) => {
    return Axios.delete(`http://localhost:8080/app/banks/bank/${bankid}`);
}

export default {
    GET_ALL_BANK_INFO,
    GET_BANK_INFO_BY_ID,
    ADD_BANK_INFO,
    UPDATE_BANK_INFO,
    DELETE_BANK_INFO
}