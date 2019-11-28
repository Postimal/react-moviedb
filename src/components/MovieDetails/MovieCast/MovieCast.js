import React from 'react';
import Person from './Person/Person';
import './MovieCast.scss';

 function MovieCast(props) {
    
    return (
        <div className="cast-container">
            {console.log(props)}
            {props.cast.slice(0,6).map(person => (
                <Person key={person.id} person={person} />
            ))}

        </div>
    )
}

export default MovieCast
