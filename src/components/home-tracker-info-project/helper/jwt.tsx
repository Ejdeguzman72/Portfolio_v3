import React from 'react';

export const getJwt = () => {
    const token = localStorage.getItem('Ej-token');
    return token;
}