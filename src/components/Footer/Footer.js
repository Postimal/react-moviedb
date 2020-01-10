import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  
        return (
            <footer id="footer" className="footer-container">
                <div className="footer-container-header">
                    <ul className="footer-container-header__1column">
                        <Link className="column_link" to={'/react-moviedb'}>
                        <li>
                            HOME
                        </li>
                        </Link>
                        <Link className="column_link" to={'/profile'}>
                        <li>
                            USER
                        </li>
                        </Link>
                        <Link className="column_link" to={'/discover'}>
                        <li>
                            DICOVER
                        </li>
                        </Link>
                    </ul>
                    <ul className="footer-container-header__2column">
                        <li>
                            <a href="https://github.com/Postimal" target="_blank" rel='noreferrer noopener'><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>My Github</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/themoviedb" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>themoviedb profile</title><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"/></svg>
                            </a>
                        </li>
                       
                        <li><a href="mailto:michal.postek1@wp.pl" target="_blank" rel='noreferrer noopener'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>e-mail me</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/></svg></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-container-bottom">Michał Postek, Copyright &copy; 2019</div>
            </footer>
        )
    
}

export default Footer;
