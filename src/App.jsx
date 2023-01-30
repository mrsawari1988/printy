import { useState } from 'react';
import './App.css';
import Contorols from './components/Contorols';
import Footer from './components/FooterComponent';
import Header from './components/Header';
import ListItemsComponent from './components/ListItemsComponent';
function App() {
    const [items, setItems] = useState([]);

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
    return (
        <div className='container'>
            <Header />

            <div className='wrapper'>
                <Contorols addFileHandler={addFileHandler} />
                <ListItemsComponent items={items} deleteFileHandler={deleteFileHandler} />
            </div>
            <Footer printHandler={printHandler} />
        </div>
    );
}

export default App;
