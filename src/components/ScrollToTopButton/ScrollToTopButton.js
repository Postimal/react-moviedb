import React, {useEffect, useState} from 'react';

import './ScrollToTopButton.scss';

const ScrollToTopButton = () => {

    const [offset, setOffset] = useState(0);

    const listener = () => {
        setOffset(window.pageYOffset);
        }

    useEffect(() => {
        window.addEventListener('scroll',listener);
        return () =>
        window.removeEventListener('scroll', listener);
    }, [])

    const scrollToTop = () => {
        let position = offset > 100 ? 0 : 5000;

        window.scrollTo({
            top: position,
            left: 0,
            behavior: 'smooth'
          });
    }

    return (
            <button
                className={offset > 100 ?'scroll-top__button rotate' : 'scroll-top__button'}
                onClick={scrollToTop}
                >
            </button>
    )
}

export default ScrollToTopButton
