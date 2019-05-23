import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';


const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>Full stack development is fun</p>
            <p><Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage;