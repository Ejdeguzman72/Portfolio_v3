import React from 'react';
import Axios from 'axios';

class UploadCarRecordFilesService {
    uploadAutoFiles(file: any,onUploadProgress: any) {
        let formData = new FormData();

        formData.append("file",file);

        return Axios.post("http://localhost:8080/app/car-record-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    };

    getAutoFiles() {
        return Axios.get('http://localhost:8080/app/car-record-documents/files');
    }
}

export default new UploadCarRecordFilesService();