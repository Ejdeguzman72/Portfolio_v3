import React from 'react';
import Axios from 'axios';

const GET_ALL_REPAIR_SHOP_INFO = () => {
    return Axios.get(`http://localhost:8080/app/repair-shops/all`);
}

const GET_REPAIR_SHOP_INFO_BY_ID = (repairShopId:any) => {
    return Axios.get(`http://localhost:8080/app/repair-shops/repair-shop/${repairShopId}`)
}

const ADD_REPAIR_SHOP_INFO = (data:any) => {
    return Axios.post(`http://localhost:8080/app/repair-shops/add-a-repair-shop`);
}

const UPDATE_REPAIR_SHOP_INFO = (repairShopId:any,data:any) => {
    return Axios.put(`http://localhost:8080/app/repair-shops/repair-shop/${repairShopId}`);
}

const DELETE_REPAIR_SHOP_INFO = (repairShopId:any) => {
    return Axios.delete(`http://localhost:8080/app/repair-shops/repair-shop/${repairShopId}`);
}

export default {
    GET_ALL_REPAIR_SHOP_INFO,
    GET_REPAIR_SHOP_INFO_BY_ID,
    ADD_REPAIR_SHOP_INFO,
    UPDATE_REPAIR_SHOP_INFO,
    DELETE_REPAIR_SHOP_INFO
}