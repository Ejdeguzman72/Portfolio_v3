import React from 'react';
import Axios from 'axios';

class UploadMedicalRecordFilesService {
    uploadAutoFiles(file: any,onUploadProgress: any) {
        let formData = new FormData();

        formData.append("file",file);

        return Axios.post("http://localhost:8080/app/medical-record-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    };

    getAutoFiles() {
        return Axios.get('http://localhost:8080/app/medical-record-documents/files');
    }
}

export default new UploadMedicalRecordFilesService();