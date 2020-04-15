import React,{useEffect, useRef, useState} from 'react';
import './MovieStarRating.scss';

const MovieStarRating = ({rating, logStatus}) => {

  const ratingContainer = useRef();
  const reminderMessage = useRef();
  const [showReminder, setShowReminder] = useState(false);


  useEffect(() => {
    setRating(rating);
  }, [rating])

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
      isChanged && index < rating && star.classList.add("star-rating-container__item--active");
      index < rating && star.classList.add("star-rating-container__item--active")
    })
  }

  const postRating = (e) => {
    e.target.closest('.star-rating-container__item').classList.add('target');
    const allStars = ratingContainer.current.childNodes;
    const clickedStarIndex = [...allStars].findIndex(el => el.classList.contains('target'));
    allStars.forEach(el => el.classList.remove("star-rating-container__item--active","target"));
    setRating(clickedStarIndex, true);
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
