import React from 'react';
import supportImage from './supportImage.jpg'
import './Person.scss';


 function Person(props) {
    return (
        
        <div className="person-container">
            {console.log(props)}
            <img src={ props.person.profile_path? `https://image.tmdb.org/t/p/w138_and_h175_face/${props.person.profile_path}`: supportImage} alt="actor/actress"/>
            <p className="person-container__name"><strong>{props.person.name}</strong></p>
            <p className="person-container__character">{props.person.character}</p>
        </div>
    )
}

export default Person
