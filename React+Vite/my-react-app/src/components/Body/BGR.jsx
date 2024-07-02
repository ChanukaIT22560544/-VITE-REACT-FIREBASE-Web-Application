import React, { useState } from 'react';
import './BGR.css';

const ImageBackgroundRemover = () => {
  const [showingPreview, setShowingPreview] = useState(true);
  const [previewSrc, setPreviewSrc] = useState('');
  const [resultSrc, setResultSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);

  const fileInput = React.useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewSrc(e.target.result);
        setImageUploaded(true);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc('');
      setImageUploaded(false);
    }
  };

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const removeBackground = () => {
    const file = fileInput.current.files[0];
    if (!file) {
      alert('Please select a file.');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file.');
      return;
    }

    setLoading(true);
    setResultSrc('');
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'regular');
    formData.append('type', 'auto');

    fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': 'Add-your api key'//add your api key
      },
      body: formData
    })
      .then(response => response.blob())
      .then(blob => {
        setLoading(false);
        setResultSrc(URL.createObjectURL(blob));
      })
      .catch(error => {
        setLoading(false);
        console.error('Error:', error);
      });

    setShowingPreview(false);
  };

  const toggleDisplay = () => {
    setShowingPreview(!showingPreview);
    if (!showingPreview && previewSrc) {
      document.getElementById('preview').classList.add('show', 'animate-bg');
    }
  };

  return (
    <div className="container">
      <h2>CNK-BGR</h2>
      <button className='b1' onClick={handleButtonClick}>Upload Image</button>
      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {imageUploaded && (
        <>
          <button className='b1' onClick={removeBackground}>Remove Background</button>
          <button className='b1' onClick={toggleDisplay}>Preview</button>
        </>
      )}
      {showingPreview ? (
        <div id="imagePreview" style={{ display: previewSrc ? 'block' : 'none' }}>
          <img id="preview" src={previewSrc}  />
        </div>
      ) : (
        <div id="resultContainer" style={{ display: resultSrc || loading ? 'block' : 'none' }}>
          {loading && <div id="loading"></div>}
          <img id="result" src={resultSrc}  />
          {resultSrc && (
            <div id="downloadBtnContainer">
              <button className='b1'
                id="downloadBtn"
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = resultSrc;
                  a.download = 'CNK.background_removed_image.png';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
              >
                Download Image
              </button>
              
            </div>
          )}
        </div>
      )}
      
    </div>
    
  );
};

export default ImageBackgroundRemover;
