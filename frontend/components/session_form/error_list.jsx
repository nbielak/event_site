import React from 'react';

const errorList = ({errors}) => {
  if (errors.length === 0) {
    return null;
  } else {
    const errorItems = errors.map(error => <li key={error}>{error}</li>)
    return (
      <ul className="error-list">
        {errorItems}
      </ul>
    )
  }
};

export default errorList;
