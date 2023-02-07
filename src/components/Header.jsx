import React from 'react';

export default function Header() {
    const quit = () => {
        window.electronAPI.appQuit();
    };

    const minimize = () => {
        window.electronAPI.winMinimize();
    };
    return (
        <div className='header'>
            <div className='header-title'>
                <h2>Printy</h2>
                <h5>printing made easy</h5>
            </div>
            <div className='header-options'>
                <i className='fa-solid fa-window-minimize' onClick={() => minimize()}></i>
                <i className='fa-solid fa-square-xmark' onClick={() => quit()}></i>
            </div>
        </div>
    );
}
