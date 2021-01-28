import React from 'react';
import Axios from 'axios';

const uploadPhotosService = (file:any, onUploadProgress:any) => {
    let formData = new FormData();

    formData.append("file",file);

    return Axios.post("http://localhost:8080/app/photo-uploads/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    });
};

const getPhotoFiles = () => {
    return Axios.get("http://localhost:8080/app/photo-uploads/files");
}

export default {
    uploadPhotosService,
    getPhotoFiles
};