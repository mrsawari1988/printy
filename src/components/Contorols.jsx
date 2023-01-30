import React, { useState } from 'react';

export default function Contorols({ addFileHandler }) {
    const [fileName, setFileName] = useState('some file');
    const [printerName, setPrinterName] = useState('');
    const [copies, setCopies] = useState(0);
    const addFile = () => {
        addFileHandler({
            fileName,
            printerName,
            copies,
        });
    };
    return (
        <div className='contorols'>
            <div className='adding-contorols'>
                <button>Choose File</button>
                <select
                    name='printer'
                    id='printer'
                    value={printerName}
                    onChange={(e) => setPrinterName(e.target.value)}
                >
                    <option value='1'>option1</option>
                    <option value='1'>option1</option>
                </select>
                <div className='print-number'>
                    <label htmlFor='prntnmbr'>Number of Copies</label>
                    <input
                        type='text'
                        name='prntnmbr'
                        value={copies}
                        onChange={(e) => setCopies(e.target.value)}
                    />
                </div>
            </div>
            <div className='add-item-button'>
                <button onClick={addFile}>Add</button>
            </div>
        </div>
    );
}
