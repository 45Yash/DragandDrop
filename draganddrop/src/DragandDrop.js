import React, { useState } from 'react';

const DragandDrop = () => {
    const [image, setImage] = useState(null);

    // Handle the file drop
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    // Styling the drag-and-drop area
    const dropZoneStyle = {
        border: '2px dashed #aaa',
        padding: '20px',
        width: '300px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    };

    return (
        <div
            style={dropZoneStyle}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            {image ? (
                <img src={image} alt="Dropped" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            ) : (
                <p>Drop an image here</p>
            )}
        </div>
    );
};

export default DragandDrop ;
