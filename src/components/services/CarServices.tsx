import React from 'react';
import Axios from 'axios';

const GET_ALL_CAR_INFO = () => {
    return Axios.get(`http://localhost:8080/app/cars/all`);
}

const GET_CAR_INFO_BY_ID = (carid:any) => {
    return Axios.get(`http://localhost:8080/app/cars/${carid}`)
}

const ADD_CAR_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/cars/add-a-car`);
}

const UPDATE_CAR_INFO = (carid:any,car:any) => {
    return Axios.put(`http://localhost:8080/app/cars/car/${carid}`);
}

const DELETE_CAR_INFO = (carid:any) => {
    return Axios.delete(`http://localhost:8080/app/delete-car-information/${carid}`);
}

export default {
    GET_ALL_CAR_INFO,
    GET_CAR_INFO_BY_ID,
    ADD_CAR_INFO,
    UPDATE_CAR_INFO,
    DELETE_CAR_INFO
}