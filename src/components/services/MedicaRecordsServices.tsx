import React from 'react';
import Axios from 'axios';

const GET_ALL_MEDICAL_RECORD_INFO = () => {
    return Axios.get(`http://localhost:8080/app/medical-records/all`);
}

const GET_MEDICAL_RECORD_INFO_BY_ID = (medicalRecordId:any) => {
    return Axios.get(`http://localhost:8080/app/medical-records/medical-reocrd/${medicalRecordId}`)
}

const ADD_MEDICAL_RECORD_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/medical-records/add-medical-record`);
}

const UPDATE_MEDICAL_RECORD_INFO = (medicalRecordId:any,MEDICAL_RECORD:any) => {
    return Axios.put(`http://localhost:8080/app/medical-records/medical-recorc/${medicalRecordId}`);
}

const DELETE_MEDICAL_RECORD_INFO = (medicalRecordId:any) => {
    return Axios.delete(`http://localhost:8080/app/medical-records/medical-record/${medicalRecordId}`);
}

export default {
    GET_ALL_MEDICAL_RECORD_INFO,
    GET_MEDICAL_RECORD_INFO_BY_ID,
    ADD_MEDICAL_RECORD_INFO,
    UPDATE_MEDICAL_RECORD_INFO,
    DELETE_MEDICAL_RECORD_INFO
}