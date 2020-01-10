import React from 'react';
import './ScrollToTopButton.scss';

const ScrollToTopButton = () => {

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <button 
          className='scroll-top' 
          onClick={scrollToTop}>
              <span>^</span>
              <span>^</span>
              <span>^</span>
        </button>
    )
}

export default ScrollToTopButton
