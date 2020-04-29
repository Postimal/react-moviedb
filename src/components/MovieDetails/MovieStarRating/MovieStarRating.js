import React,{useEffect, useRef, useState} from 'react';

import './MovieStarRating.scss';
import Toast from 'light-toast';


const MovieStarRating = ({rating, logStatus, movieId, apiOpener,sessionId}) => {
  const ratingContainer = useRef();
  const reminderMessage = useRef();
  const [showReminder, setShowReminder] = useState(false);
  const [rate, setRate] = useState(null);

  useEffect(() => {
    setRating(rating);
  }, [rating])

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify({"value":rate})
    }

    if (rate)
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiOpener}&guest_session_id=${sessionId}`,requestOptions)
    .then(response => response.json())
    .then(data => {Toast.info('Status: ' + data.status_message, 2000,() => {})})

  }, [apiOpener, movieId, rate, sessionId])

  useEffect(() => {
    if(showReminder)
      reminderMessage.current.classList.remove('star-rating-container-warning--hide');
      const timeout = setTimeout(() => {
        reminderMessage.current.classList.add('star-rating-container-warning--hide');
      },2500);
      setShowReminder(false);

    return () => {
      clearTimeout(timeout)
    }

  }, [showReminder])


  const setRating = (rating, isChanged) => {
    rating = isChanged? rating + 1 : Math.round(rating / 2);
    const allStars = ratingContainer.current.childNodes;
    allStars.forEach((star,index) => {
    index < rating && star.classList.add("star-rating-container__item--active")
    });
  }

  const postRating = (e) => {
    e.target.closest('.star-rating-container__item').classList.add('target');
    const allStars = ratingContainer.current.childNodes;
    const clickedStarIndex = [...allStars].findIndex(el => el.classList.contains('target'));
    allStars.forEach(el => el.classList.remove("star-rating-container__item--active","target"));
    setRating(clickedStarIndex, true);

    if (logStatus === "GUEST") {
      setRate((clickedStarIndex + 1) * 2)
    }
  }

  const star =  <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>;

  return (
    <div onClick={(e) => logStatus? postRating(e) : setShowReminder(true)}  ref={ratingContainer} className="star-rating-container">
      {star}
      {star}
      {star}
      {star}
      {star}
      <div ref={reminderMessage} className="star-rating-container-warning star-rating-container-warning--hide">
        <p>Sign in at least as Guest to use it</p>
      </div>
    </div>
  )
}

export default MovieStarRating
