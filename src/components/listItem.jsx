import React from 'react';

export default function ListItem({ fileName, printerName, copies }) {
    return (
        <li>
            <div className='field'>
                <h5 className='title'>file name :</h5>
                <h4>{fileName}</h4>
            </div>
            <div className='field'>
                <h5>printer name:</h5>
                <h4>{printerName}</h4>
            </div>
            <div className='field'>
                <h5>copies :</h5>
                <h4>{copies}</h4>
            </div>
            <div className='field'>
                <h5>options</h5>
                <h4>
                    <i className='fa-solid fa-trash-can'></i>
                    <i className='fa-solid fa-pen-to-square'></i>
                </h4>
            </div>
        </li>
    );
}
