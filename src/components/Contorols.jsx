import React, { useState } from 'react';
import { useRef } from 'react';
import useControls from '../hooks/useControls';
import useValidation from './../hooks/useValidation';
export default function Contorols({ addFileHandler, printersList }) {
    // refrence to the file input so later it's value will be cleared
    const fileRef = useRef();
    const { state, changeHandler, buttonName, isActive, resetState } = useControls(fileRef);
    const { validator } = useValidation(fileRef);
    const [errors, setErrors] = useState([]);
    const addFile = () => {
        //input validations
        const failores = validator(state);
        if (failores.length > 0) {
            setErrors([...failores]);
        } else {
            addFileHandler({
                fileName: state.fileName,
                printerName: state.printerName,
                filePath: state.filePath,
                copies: state.copies,
                id: Math.random(),
            });

            resetState();
            setErrors([]);
        }
    };
    return (
        <div className='contorols'>
            <div className='adding-contorols'>
                <label className={isActive ? 'file-upload active' : 'file-upload'}>
                    <input
                        type='file'
                        onChange={(e) => changeHandler(e)}
                        ref={fileRef}
                        accept='application/pdf'
                    />
                    {buttonName}
                </label>
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
                <div className='print-number'>
                    <label htmlFor='copies'>Number of Copies</label>
                    <input
                        type='text'
                        name='copies'
                        value={state.copies || 1}
                        onChange={(e) => changeHandler(e)}
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
