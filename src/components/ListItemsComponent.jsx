import React from 'react';
import ListItem from './listItem';
export default function ListItemsComponent({ items }) {
    return (
        <div className='list-items'>
            <ul>
                {items.map((item) => {
                    return (
                        <ListItem
                            fileName={item.fileName}
                            printerName={item.printerName}
                            copies={item.copies}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
