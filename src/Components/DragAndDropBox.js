import React, { useState, useRef } from 'react';


const DragAndDropBox = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleFileChange = (file) => {
    // Handle the file as needed (e.g., upload to a server, display details, etc.)
    console.log('Selected File:', file);
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="drag-and-drop-box"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {selectedFile ? (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          {/* Add additional file details or actions */}
        </div>
      ) : (
        <p onClick={handleSelectFile}>Drag and drop a file here, or click to select a file.</p>
      )}
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={(e) => handleFileChange(e.target.files[0])}
        ref={fileInputRef}
      />
      <button onClick={handleSelectFile}>Select File</button>
    </div>
  );
};

export default DragAndDropBox;
