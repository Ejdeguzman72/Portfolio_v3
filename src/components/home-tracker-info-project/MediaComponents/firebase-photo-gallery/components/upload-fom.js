import React, { useState } from 'react';
import ProgressBar from './progress-bar';
import '../../../../style-sheets/photo-page.css';

const UploadForm = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (event) => {
        let selected = event.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file. Must be .png or .jpg file');
        }
    };
    return (
        <form>
            <label className="photo-gallery-upload-label">
                <input className="photo-gallery-label-input" type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    );
}

export default UploadForm;