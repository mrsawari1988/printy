import useControls from './../hooks/useControls';

export default function EditModal({
    editItem,
    setOpenModal,
    setEditItem,
    updateFileItem,
    printersList,
}) {
    const { state, changeHandler } = useControls(null, editItem);

    const update = () => {
        updateFileItem(state);
        setEditItem({});
        setOpenModal(false);
    };
    const closeModal = () => {
        setEditItem({});
        setOpenModal(false);
    };
    return (
        <>
            <div className='modal-header'>
                <h3>Edit File Item</h3>
            </div>
            <div className='modal-content'>
                <label>{state.fileName || ''}</label>
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
                <input
                    type='text'
                    name='copies'
                    value={state.copies || ''}
                    onChange={(e) => changeHandler(e)}
                />
                <button onClick={() => update()} className='update-botton'>
                    Update
                </button>
            </div>
            <div className='modal-footer'>
                <button onClick={() => closeModal()} className='cancel-botton'>
                    Cancel
                </button>
            </div>
        </>
    );
}
