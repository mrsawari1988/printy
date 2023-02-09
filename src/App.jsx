import { useState } from 'react';
import './App.css';
import Contorols from './components/Contorols';
import Footer from './components/FooterComponent';
import Header from './components/Header';
import FileItemList from './components/FileItemsList';
import usePrinty from './hooks/usePrinty';
import Modal from './components/Modal';
import EditModal from './components/editModal';
import usePrinters from './hooks/usePrinters';
function App() {
    const { filesList, setFilesList, deleteFileHandler, clearAllFilesHandler, addFileHandler } =
        usePrinty();
    const { printersList } = usePrinters();
    const [openModal, setOpenModal] = useState(false);
    //editable item to sent to modal , it will be changed by FileItem Component
    const [editItem, setEditItem] = useState({});

    const printHandler = () => {
        window.electronAPI.printFile(filesList);
    };

    //updating the file item after editing an item
    const updateFileItem = (item) => {
        //the function loops through the state(filesList) to keep the items in the same order
        //just replaces the edited item with the new one
        const newState = [];
        filesList.forEach((file) => {
            if (file.id !== item.id) {
                newState.push(file);
            } else {
                newState.push(item);
            }
        });

        setFilesList(newState);
    };

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

            {/* modal part for editing  */}
            {openModal && (
                <Modal setOpenModal={setOpenModal}>
                    <EditModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        editItem={editItem}
                        setEditItem={setEditItem}
                        updateFileItem={updateFileItem}
                        printersList={printersList}
                    />
                </Modal>
            )}
        </>
    );
}

export default App;
