import { useState } from 'react';
const useControls = (fileRef) => {
    const [state, setState] = useState({ copies: 1 });
    const [buttonName, setButtonName] = useState('choose a file');
    const [isActive, setIsActive] = useState(false);

    const changeHandler = (e) => {
        e.persist();
        if (e.target.type === 'file') {
            setState((state) => ({
                ...state,
                fileName: e.target.files[0].name,
                filePath: e.target.files[0].path,
            }));
            setButtonName(e.target.files[0].name);
            setIsActive(true);
        } else {
            setState((state) => ({ ...state, [e.target.name]: e.target.value }));
        }
    };

    const resetState = () => {
        setButtonName('Choose file');
        setState({ copies: 1 });
        //clearing the file input value
        fileRef.current.value = null;
        setIsActive(false);
    };
    return {
        state,
        changeHandler,
        buttonName,
        isActive,
        resetState,
    };
};

export default useControls;
