import React from 'react';

function Mtitle() {
  // Define a custom font style for the main title
  const customFontStyle = {
    fontFamily: 'get_schwifty',
  };

  return (
    <div>
      {/* Render the main title with custom font style */}
      <h1 className='mainTitle' style={customFontStyle}>
        <span className='Rick'>Rick</span>
        <span className='and'>and</span>
        <span className='Morty'>Morty</span>
      </h1>
      
      {/* Render the secondary title */}
      <h3 className='secTitle'>by Itay Vazana</h3>
    </div>
  );
}

export default Mtitle; 