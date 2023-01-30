import React from 'react';

export default function Footer({ printHandler }) {
    return (
        <div>
            <div className='footer'>
                <button onClick={() => printHandler()}>printy</button>
            </div>
        </div>
    );
}
