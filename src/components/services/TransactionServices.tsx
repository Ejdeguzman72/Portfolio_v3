import React from 'react';
import Axios from 'axios';

const GET_ALL_TRANSACTIONS_INFO = () => {
    return Axios.get(`http://localhost:8080/app/transactions/all`);
}

const GET_TRANSACTIONS_INFO_BY_ID = (transactionid:any) => {
    return Axios.get(`http://localhost:8080/app/transactions/transaction/${transactionid}`)
}

const ADD_TRANSACTIONS_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/transactions/add-transactions`);
}

const UPDATE_TRANSACTIONS_INFO = (transactionid:any,data:any) => {
    return Axios.put(`http://localhost:8080/app/transactions/transaction/${transactionid}`);
}

const DELETE_TRANSACTIONS_INFO = (transactionid:any) => {
    return Axios.delete(`http://localhost:8080/app/transactions/transaction/${transactionid}`);
}

export default {
    GET_ALL_TRANSACTIONS_INFO,
    GET_TRANSACTIONS_INFO_BY_ID,
    ADD_TRANSACTIONS_INFO,
    UPDATE_TRANSACTIONS_INFO,
    DELETE_TRANSACTIONS_INFO
}