import React from 'react';
import Axios from 'axios';

class UploadTransactionFilesService {
    uploadAutoFiles(file:any,onUploadProgress:any) {
        let formData = new FormData();

        formData.append("file",file);

        return Axios.post("http://localhost:8080/app/transaction-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    };

    getAutoFiles() {
        return Axios.get('http://localhost:8080/app/transaction-documents/files');
    }
}

export default new UploadTransactionFilesService();