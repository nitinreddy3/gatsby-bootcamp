import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Full stack development is fun</p>
            <p><Link to="/contact">Contact Me</Link></p>
        </div>
    )
}

export default AboutPage;