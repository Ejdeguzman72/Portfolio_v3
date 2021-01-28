import React, { useState,useEffect } from 'react';
import VideoUploadService from '../../services/video-file-upload-service';

const VideosUploadComponent = () => {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [videoFileInfos, setVideoFileInfos] = useState([]);

    useEffect(() => {
        VideoUploadService.getVideos().then((response) => {
            setVideoFileInfos(response.data);
        });
    }, []);

    const selectFile = (event) => {
        setSelectedFiles(event.target.value);
    };

    const upload = () => {
        let currentFile = selectedFiles[0];

        setProgress(0);
        setCurrentFile(currentFile);

        VideoUploadService.uploadvideoFile(currentFile, (event) => {
            setProgress(Math.round(100*event.loaded) / event.total);
        })
        .then((response) => {
            setMessage(response.data.message);
            return VideoUploadService.getVideos();
        })
        .then((files) => {
            setVideoFileInfos(files.data);
        })
        .catch(() => {
            setProgress(0);
            setMessage("Could not upload the file");
            setCurrentFile(undefined);
        });
        setSelectedFiles(undefined);
    }

    return (
        <div>
            <div>
                <br></br>
                <div>
                    {currentFile && (
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-info progress-bar-striped"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progress + "%" }}
                            >
                                {progress}%
            </div>
                        </div>
                    )}

                    <label className="btn btn-default">
                        <input type="file" onChange={selectFile} />
                    </label>

                    <button className="btn btn-success"
                        disabled={!selectedFiles}
                        onClick={upload}
                    >
                        Upload
        </button>

                    <div className="alert alert-light" role="alert">
                        {message}
                    </div>

                    <div className="media-uploads-container-title">
                        <div className="card-header">List of Files</div>
                        <ul className="media-uploads-container">
                            {videoFileInfos &&
                                videoFileInfos.map((file, index) => (
                                    <li className="list-group-item" key={index}>
                                        <a href={file.videosFileUrl}>{file.videosFilename}</a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideosUploadComponent;