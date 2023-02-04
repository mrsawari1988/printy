import React from 'react';
//import ListItem from './listItem';
import FileItem from './FileItem';
//sortable imports
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

export default function FileItemList({ items, deleteFileHandler, setItems }) {
    const sensors = useSensors(useSensor(PointerSensor));
    function handleDragEnd(event) {
        const { active, over } = event;
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.map((item) => item.id).indexOf(active.id);
                const newIndex = items.map((item) => item.id).indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
    if (items.length < 1) {
        return (
            <div className='list-items'>
                <div className='no-file'>
                    <h5>there is no file</h5>
                </div>
            </div>
        );
    }
    return (
        <div className='list-items'>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    <ul>
                        {items.map((item) => {
                            return (
                                <FileItem
                                    fileName={item.fileName}
                                    printerName={item.printerName}
                                    copies={item.copies}
                                    key={item.id}
                                    id={item.id}
                                    deleteFileHandler={deleteFileHandler}
                                    handle={true}
                                />
                            );
                        })}
                    </ul>
                </SortableContext>
            </DndContext>
        </div>
    );
}
