import React from 'react';

import { Link } from 'react-router-dom';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = ({history}) => (
    <div className='homepage'>
        <Link to='/hats'>HATS</Link>

        <Directory/>
    </div >
)

export default HomePage;