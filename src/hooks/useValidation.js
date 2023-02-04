const useValidation = (fileRef) => {
    const validator = (stateObj) => {
        const erros = [];
        if (!stateObj.fileName) {
            erros.push({ id: 1, type: 'fileName', message: 'plz select a file' });
        }
        if (stateObj.fileName && fileRef.current.files[0].type !== 'application/pdf') {
            erros.push({ id: 4, type: 'fileType', message: 'the selected file is not PDF' });
        }
        if (!stateObj.printerName) {
            erros.push({ id: 2, type: 'printerName', message: 'please select a printer' });
        }
        if (stateObj.copies > 6 || stateObj.copies <= 0) {
            erros.push({ id: 3, type: 'copies', message: 'copies must be between 1 and 6' });
        }
        return erros;
    };

    return { validator };
};

export default useValidation;
