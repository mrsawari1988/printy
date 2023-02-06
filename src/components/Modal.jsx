import useControls from './../hooks/useControls';
import { useState, useEffect } from 'react';
export default function Modal({ openModal, editItem, setOpenModal, setEditItem }) {
    const { state, changeHandler, setState } = useControls(null, editItem, 'modal');
    const [printersList, setPrintersList] = useState([]);
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

    const updateState = () => {
        console.log(state);
        setEditItem({});
        setOpenModal(false);
    };

    return (
        <div className='overlay'>
            <div className='modal-body'>
                <div className='modal-header'>
                    <h3>this is a modal</h3>
                </div>
                <div className='modal-content'>
                    <label>{state.fileName || ''}</label>
                    <select
                        name='printerName'
                        id='printer'
                        value={state.printerName || ''}
                        onChange={(e) => changeHandler(e)}
                    >
                        {/* render printers list */}
                        {printersList &&
                            printersList.map((printer) => (
                                <option value={printer.name} key={printer.deviceId}>
                                    {printer.name}
                                </option>
                            ))}
                    </select>
                    <input
                        type='text'
                        name='copies'
                        value={state.copies || ''}
                        onChange={(e) => changeHandler(e)}
                    />
                    <button onClick={() => updateState()}>Update</button>
                </div>
                <div className='modal-footer'>
                    <h4>this is footer</h4>
                </div>
            </div>
        </div>
    );
}
