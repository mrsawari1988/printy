import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
export default function FileItem({
    fileName,
    printerName,
    copies,
    id,
    deleteFileHandler,
    item,
    setEditItem,
    setOpenModal,
}) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: id,
    });
    // function is used to set editable item for modal
    const updateHandler = () => {
        setEditItem(item);
        setOpenModal(true);
    };
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    //setNodeRef and style are applied on main element which is <li> here
    // attributes and listeners are applied to drag handler which is <i> here but if we dont use handler we must set them to the main element
    return (
        <li ref={setNodeRef} style={style}>
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
                    <i className='fa-solid fa-trash-can' onClick={() => deleteFileHandler(id)}></i>
                    <i className='fa-solid fa-pen-to-square' onClick={() => updateHandler()}></i>
                </h4>
            </div>
            <div className='drag-icon' {...attributes} {...listeners}>
                <i className='fa-solid fa-grip-vertical'></i>
            </div>
        </li>
    );
}
