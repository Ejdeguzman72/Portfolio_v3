import React from 'react';
import Axios from 'axios';

const GET_ALL_CAR_RECORD_INFO = () => {
    return Axios.get(`http://localhost:8080/app/car-records/all`);
}

const GET_CAR_RECORD_INFO_BY_ID = (carid:any) => {
    return Axios.get(`http://localhost:8080/app/car-records/car-record/${carid}`)
}

const ADD_CAR_RECORD_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/car-records/add-a-car`);
}

const UPDATE_CAR_RECORD_INFO = (carid:any,car:any) => {
    return Axios.put(`http://localhost:8080/app/car-records/car-record/${carid}`);
}

const DELETE_CAR_RECORD_INFO = (carid:any) => {
    return Axios.delete(`http://localhost:8080/app/car-records/car-record/${carid}`);
}

export default {
    GET_ALL_CAR_RECORD_INFO,
    GET_CAR_RECORD_INFO_BY_ID,
    ADD_CAR_RECORD_INFO,
    UPDATE_CAR_RECORD_INFO,
    DELETE_CAR_RECORD_INFO
}