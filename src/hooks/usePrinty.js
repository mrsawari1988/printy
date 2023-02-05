import { useState } from 'react';

const usePrinty = () => {
    const [filesList, setFilesList] = useState([]);
    const addFileHandler = (newFile) => {
        setFilesList([...filesList, newFile]);
    };
    const deleteFileHandler = (id) => {
        setFilesList(filesList.filter((item) => item.id !== id));
    };
    const clearAllFilesHandler = () => {
        setFilesList([]);
    };

    return { filesList, setFilesList, deleteFileHandler, clearAllFilesHandler, addFileHandler };
};

export default usePrinty;
