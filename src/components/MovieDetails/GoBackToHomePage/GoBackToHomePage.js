import React from 'react'
import { Link } from 'react-router-dom';

import './GoBackToHomePage.scss';

const GoBackToHomePage = () => {
  return (
    <Link className="go-homepage-button--svg" to={'/react-moviedb'}></Link>
  )
}

export default GoBackToHomePage
