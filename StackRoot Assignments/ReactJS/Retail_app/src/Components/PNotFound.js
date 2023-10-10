import React from 'react';

const PageNotFound = () => {
  return (
    <div className="not-found-container">
        <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg" 
        alt="pageNotFound" className="not-found-image" height ="350" width = "350"/>
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-message">The page you are looking for does not exist.</p>
    </div>
  );
};

export default PageNotFound;