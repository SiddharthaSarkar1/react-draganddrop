import React from 'react';
import { ImageConfig } from '../../config/ImageConfig';
import uploadImg from '../../assets/cloud-upload-regular-240.png';


import "./DragFileInput.css";

const DragFileInput = () => {
  return (
    <div className='drop-file-input'>
      <div className="drop-file-input__label">
        <img src={uploadImg} alt="upload Image" />
        <p>Drag & Drop your files here</p>
      </div>
      <input type="file" />
    </div>
  )
}

export default DragFileInput;
