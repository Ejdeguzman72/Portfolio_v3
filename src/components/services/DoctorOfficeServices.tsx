import React from 'react';
import Axios from 'axios';

const GET_ALL_DOCTOR_INFO = () => {
    return Axios.get(`http://localhost:8080/app/doctor-offices/all`);
}

const GET_DOCTOR_INFO_BY_ID = (doctorOfficeId:any) => {
    return Axios.get(`http://localhost:8080/app/doctor-offices/doctor-office/${doctorOfficeId}`)
}

const ADD_DOCTOR_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/doctor-offices/add-a-doctor-office`);
}

const UPDATE_DOCTOR_INFO = (doctorOfficeId:any,DOCTOR:any) => {
    return Axios.put(`http://localhost:8080/app/doctor-offices/doctor-office/${doctorOfficeId}`);
}

const DELETE_DOCTOR_INFO = (doctorOfficeId:any) => {
    return Axios.delete(`http://localhost:8080/app/delete-doctor-office-information/${doctorOfficeId}`);
}

export default {
    GET_ALL_DOCTOR_INFO,
    GET_DOCTOR_INFO_BY_ID,
    ADD_DOCTOR_INFO,
    UPDATE_DOCTOR_INFO,
    DELETE_DOCTOR_INFO
}