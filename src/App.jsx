import { useState, useEffect } from 'react';
import './App.css';
import Contorols from './components/Contorols';
import Footer from './components/FooterComponent';
import Header from './components/Header';
import FileItemList from './components/FileItemsList';
function App() {
    const [items, setItems] = useState([]);

    const [printersList, setPrintersList] = useState([]);

    const addFileHandler = (newFile) => {
        setItems([...items, newFile]);
    };
    const deleteFileHandler = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };
    const clearAllFilesHandler = () => {
        setItems([]);
    };
    const printHandler = () => {
        window.electronAPI.printFile(items);
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
        <div className='container'>
            <Header />
            <div className='wrapper'>
                <Contorols addFileHandler={addFileHandler} printersList={printersList} />
                <FileItemList
                    items={items}
                    deleteFileHandler={deleteFileHandler}
                    setItems={setItems}
                />
            </div>
            <Footer printHandler={printHandler} clearAllFilesHandler={clearAllFilesHandler} />
        </div>
    );
}

export default App;
