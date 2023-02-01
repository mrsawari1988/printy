import { useState, useEffect } from 'react';
import './App.css';
import Contorols from './components/Contorols';
import Footer from './components/FooterComponent';
import Header from './components/Header';
import ListItemsComponent from './components/ListItemsComponent';
function App() {
    const [items, setItems] = useState([]);
    const [printersList, setPrintersList] = useState([]);

    const addFileHandler = (newFile) => {
        setItems([...items, newFile]);
    };
    const deleteFileHandler = (id) => {
        console.log(id);
        setItems(items.filter((item) => item.id !== id));
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
                <ListItemsComponent items={items} deleteFileHandler={deleteFileHandler} />
            </div>
            <Footer printHandler={printHandler} />
        </div>
    );
}

export default App;
