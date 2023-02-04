import React from 'react';

export default function Footer({ printHandler, clearAllFilesHandler }) {
    return (
        <div>
            <div className='footer'>
                <button className='clear-btn' onClick={() => clearAllFilesHandler()}>
                    Clear all
                </button>
                <button onClick={() => printHandler()}>Printy</button>
            </div>
        </div>
    );
}
