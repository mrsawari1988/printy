import { useState, useEffect } from 'react';

const usePrinters = () => {
    const [printersList, setPrintersList] = useState([]);

    useEffect(() => {
        //get printers from electronjs
        const fetchPrinters = async () => {
            const printers = await window.electronAPI.getPrinters();
            setPrintersList(printers);
            console.log(printers);
        };

        try {
            fetchPrinters();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return { printersList };
};

export default usePrinters;
