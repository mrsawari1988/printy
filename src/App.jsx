import { useState } from 'react';
import './App.css';
import Contorols from './components/Contorols';
import Footer from './components/FooterComponent';
import Header from './components/Header';
import ListItemsComponent from './components/ListItemsComponent';
function App() {
    const [items, setItems] = useState([
        { fileName: 'document.pdf', printerName: 'HP cheaper 1018', copies: 10 },
        { fileName: 'docy.pdf', printerName: 'canon  4410', copies: 3 },
    ]);

    const addFileHandler = (newFile) => {
        setItems([...items, newFile]);
    };

    const printHandler = () => {
        window.electronAPI.printFile(items);
    };
    return (
        <div className='container'>
            <Header />

            <div className='wrapper'>
                <Contorols addFileHandler={addFileHandler} />
                <ListItemsComponent items={items} />
            </div>
            <Footer printHandler={printHandler} />
        </div>
    );
}

export default App;
