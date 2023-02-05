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
    const [openModal, setOpenModal] = useState(true);
    const printHandler = () => {
        window.electronAPI.printFile(filesList);
    };

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
                    />
                </div>
                <Footer printHandler={printHandler} clearAllFilesHandler={clearAllFilesHandler} />
            </div>
            <Modal openModal={openModal} />
        </>
    );
}

export default App;
