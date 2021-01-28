import Axios from 'axios';
import React from 'react';

const GET_ALL_CONTACTS = () => {
    return Axios.get('http://localhost:8080/app/contact-book/all');
}

const GET_BY_ID = (contactid:any) => {
    return Axios.get(`http://localhost:8080/app/contact-book/${contactid}`)
}

const ADD_CONTACT_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/contact-book/contacts`,data);
}

const UPDATE_CONTACT_INFO = (contactid:any,data:any) => {
    return Axios.put(`http://localhost:8080/app/contact-book/contact/${contactid}`);
}

const DELETE_CONTACT_INFO = (contactid: any) => {
    return Axios.delete(`http"//localhost:8080/app/contact-book/${contactid}`);
}

export default {
    GET_ALL_CONTACTS,GET_BY_ID,ADD_CONTACT_INFO,UPDATE_CONTACT_INFO,DELETE_CONTACT_INFO
}
