import React, { useState } from 'react';
import { useRef } from 'react';

export default function Contorols({ addFileHandler }) {
    const [fileName, setFileName] = useState(null);
    const [filePath, setfilePath] = useState('');
    const [printerName, setPrinterName] = useState(null);
    const [copies, setCopies] = useState(1);
    const [buttonName, setButtonName] = useState('Choose file');
    const [isActive, setIsActive] = useState(false);
    // refrence to the file input so later it's value will be cleared
    const fileRef = useRef();
    const [errors, setErrors] = useState([]);
    const addFile = () => {
        //input validations
        const failores = [];
        if (fileName === null) {
            failores.push({ id: 1, type: 'fileName', message: 'plz select a file' });
        }
        if (printerName === null) {
            failores.push({ id: 2, type: 'printerName', message: 'please select a printer' });
        }
        if (copies > 6 || copies <= 0) {
            failores.push({ id: 3, type: 'copies', message: 'copies must be between 1 and 6' });
        }
        console.log(errors);
        if (failores.length > 0) {
            setErrors([...failores]);
        } else {
            addFileHandler({
                fileName,
                filePath,
                printerName,
                copies,
                id: Math.random(),
            });
            setIsActive(false);
            setButtonName('Choose file');
            setFileName(null);
            setPrinterName(null);
            setfilePath(null);
            //clearing the file input value
            fileRef.current.value = null;
            setErrors([]);
        }
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
                <div className='errors'>
                    {errors &&
                        errors.map((error) => (
                            <p className='alert' key={error.id}>
                                - {error.message}
                            </p>
                        ))}
                </div>
            </div>
            <div className='add-item-button'>
                <button onClick={addFile}>Add</button>
            </div>
        </div>
    );
}
