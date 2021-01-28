import React, { useEffect } from 'react';
import useStorage from '../services/use-storage';
import { motion } from 'framer-motion';
import '../../../../style-sheets/photo-page.css';

const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + '%'}}>

        </motion.div>
    );
}

export default ProgressBar;