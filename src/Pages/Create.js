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

          {/* Editable Textarea for Blog Content */}
          <textarea
            className="editable-textarea"
            placeholder="Start writing your blog here..."
            rows="10"
          ></textarea>

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
