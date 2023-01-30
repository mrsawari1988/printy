import React, { useState } from 'react';
import { useRef } from 'react';

export default function Contorols({ addFileHandler }) {
    const [fileName, setFileName] = useState('');
    const [filePath, setfilePath] = useState('');
    const [printerName, setPrinterName] = useState('');
    const [copies, setCopies] = useState(1);
    const [buttonName, setButtonName] = useState('Choose file');
    const [isActive, setIsActive] = useState(false);
    const fileRef = useRef();
    const addFile = () => {
        addFileHandler({
            fileName,
            filePath,
            printerName,
            copies,
            id: Math.random(),
        });
        setIsActive(false);
        setButtonName('Choose file');
        setFileName('');
        setfilePath('');
        fileRef.current.value = null;
    };
    const handleFile = (e) => {
        if (!e.target.files[0]) {
            return;
        }
        setFileName(e.target.files[0].name);
        setButtonName(e.target.files[0].name);
        setfilePath(e.target.files[0].path);
        setIsActive(true);
    };
    return (
        <div className='contorols'>
            <div className='adding-contorols'>
                <label className={isActive ? 'file-upload active' : 'file-upload'}>
                    <input type='file' onChange={(e) => handleFile(e)} ref={fileRef} />
                    {buttonName}
                </label>
                <select
                    name='printer'
                    id='printer'
                    value={printerName}
                    onChange={(e) => setPrinterName(e.target.value)}
                >
                    <option value='HP 1018'>HP 1018</option>
                    <option value='Canon 4450'>HP 1018</option>
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
