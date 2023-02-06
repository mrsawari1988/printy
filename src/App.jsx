import { useState, useEffect } from 'react';
import './App.css';
import Contorols from './components/Contorols';
import Footer from './components/FooterComponent';
import Header from './components/Header';
import FileItemList from './components/FileItemsList';
import usePrinty from './hooks/usePrinty';
import Modal from './components/Modal';
function App() {
    const { filesList, setFilesList, deleteFileHandler, clearAllFilesHandler, addFileHandler } =
        usePrinty();
    const [printersList, setPrintersList] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [editItem, setEditItem] = useState({});

    const printHandler = () => {
        window.electronAPI.printFile(filesList);
    };
    const updateEditItem = (item) => {
        setEditItem(item);
    };
    const updateFilesList = (newItem) => {};

    useEffect(() => {
        //get printers from electronjs
        const fetchPrinters = async () => {
            const printers = await window.electronAPI.getPrinters();
            setPrintersList(printers);
        };

        try {
            fetchPrinters();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <div className='container'>
                <Header />
                <div className='wrapper'>
                    <Contorols addFileHandler={addFileHandler} printersList={printersList} />
                    <FileItemList
                        filesList={filesList}
                        deleteFileHandler={deleteFileHandler}
                        setFilesList={setFilesList}
                        setEditItem={setEditItem}
                        setOpenModal={setOpenModal}
                    />
                </div>
                <Footer printHandler={printHandler} clearAllFilesHandler={clearAllFilesHandler} />
            </div>
            {openModal && (
                <Modal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    editItem={editItem}
                    updateFilesList={updateFilesList}
                    setEditItem={setEditItem}
                />
            )}
        </>
    );
}

export default App;
