// src/Create.js
import React, { useState } from 'react';
import '../Styles/Create.css'; // Import the CSS file for styling

function Create() {
  const [isModalOpen, setModalOpen] = useState(true); // State to control modal visibility
  const [step, setStep] = useState(1); // State to control the modal steps
  const [selectedOption, setSelectedOption] = useState(''); // State for dropdown selection
  const [title, setTitle] = useState(''); // State for title input
  const [isContentEditable, setContentEditable] = useState(true); // State to control content editability

  // Handle dropdown change
  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle next button click
  const handleNextClick = () => {
    if (selectedOption === 'blog') {
      setStep(2); // Move to the next step if "Blog" is selected
    }
    // Additional handling can be added for "story"
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false); // Close the modal on submit
    setStep(1); // Reset step to initial
  };

  // Handle text formatting
  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

//Image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '100%'; // Optional: Set max width for the image

      const editor = document.querySelector('.editable-textarea');
      editor.appendChild(img); // Insert image into the editor
    };

    if (file) {
      reader.readAsDataURL(file); // Convert image file to base64 string
    }
  };

  return (
    <div className='create-section'>
      {/* Modal Section */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {step === 1 && (
              <form className="form-creation">
                <div className="form-group">
                  <label htmlFor="contentType" className="form-label">Select Content Type *</label>
                  <select
                    id="contentType"
                    className="form-input"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="story">Story</option>
                    <option value="blog">Blog</option>
                  </select>
                </div>
                <button type="button" className="next-button" onClick={handleNextClick}>
                  Next
                </button>
              </form>
            )}

            {step === 2 && selectedOption === 'blog' && (
              <form className="form-creation" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="title"
                    className="form-input"
                    placeholder="Title *"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Content Section - Display after modal is submitted */}
      {!isModalOpen && (
        <div className="content-section">
          {/* Editable Title Section */}
          <h2
            contentEditable={isContentEditable}
            className="editable-title"
          >
            {title}
          </h2>

          {/* Text Editor Toolbar */}
          <div className="editor-toolbar">
            <button onClick={() => formatText('bold')} className="toolbar-button">Bold</button>
            <button onClick={() => formatText('italic')} className="toolbar-button">Italic</button>
            <button onClick={() => formatText('underline')} className="toolbar-button">Underline</button>
            <button onClick={() => formatText('justifyLeft')} className="toolbar-button">Align Left</button>
            <button onClick={() => formatText('justifyCenter')} className="toolbar-button">Center</button>
            <button onClick={() => formatText('justifyRight')} className="toolbar-button">Align Right</button>
            <button onClick={() => formatText('insertOrderedList')} className="toolbar-button">Ordered List</button>
            <button onClick={() => formatText('insertUnorderedList')} className="toolbar-button">Unordered List</button>
            <select onChange={(e) => formatText('fontName', e.target.value)} className="toolbar-select">
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>
            <select onChange={(e) => formatText('fontSize', e.target.value)} className="toolbar-select">
              <option value="1">Small</option>
              <option value="3">Normal</option>
              <option value="5">Large</option>
              <option value="7">Huge</option>
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              id="upload-image"
            />
            <label htmlFor="upload-image" className="toolbar-button">Upload Image</label>
          </div>

          {/* Editable Textarea for Blog Content */}
          <div
            contentEditable={true}
            className="editable-textarea"
            placeholder="Start writing your blog here..."
          ></div>

          {/* Buttons */}
          <div className="button-group">
            <button className="draft-button">Save to Draft</button>
            <button className="publish-button">Publish</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Create;
