// src/Book.js
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Book.css"; // For styling

const Book = ({ pages = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Animation for page turn
  const { transform } = useSpring({
    transform: `rotateY(${currentPage % 2 === 0 ? 0 : 180}deg)`,
    config: { tension: 300, friction: 30 }
  });

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage)
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  console.log(currentPage)


  return (
    <div className="book-container">
      {pages.length > 0 ? (
        <>
          <animated.div className="page" style={{ transform }}>
            {pages[currentPage]}
          </animated.div>
          <div className="controls">
            <button onClick={prevPage} disabled={currentPage === 0}>
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div>No pages available</div>
      )}
    </div>
  );
};

export default Book;
