import { useState } from 'react';
const useControls = (fileRef, initialState = { copies: 1 }) => {
    // this hook is used by contorols component and Modal component , so in modal we pass the editable item as the initial state
    const [state, setState] = useState({ ...initialState });
    //using this variable to set the button name to file name
    const [buttonName, setButtonName] = useState('choose a file');
    //this vatiable is being used to determine the button class
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
