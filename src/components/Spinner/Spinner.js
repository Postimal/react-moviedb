import React from 'react';
import spinner from './spinner_b.webp';

 const Spinner = () => {
    return (
        <div>
            <img
                src={spinner}
                alt="Loading..."
                style={{ width: '200px', margin: '100px auto', display: 'block'}}
            />
        </div>
    )
}

export default Spinner;