import React from 'react';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = ({ ...ri }) => {
    // ri = router items (history, location, match) passed in as props from Route component={HomePage}
    console.log(ri);
    return (
        <div className='homepage'>
            <Directory />
        </div >
    );
}

export default HomePage;
