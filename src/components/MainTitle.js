import React from 'react';
import '../Style/Style.css';
function Mtitle() {
    const CustomFontStyle = {
        fontFamily: 'get_schwifty',
    };
  return (
    <div>
      <h1 className='mainTitle' style={CustomFontStyle}><span className='Rick'>Rick</span><span className='and'>and</span><span className='Morty'>Morty</span></h1>
      <h3 className='secTitle'>by Itay Vazana</h3>
    </div>
  );
}

export default Mtitle; 