import React from 'react';
import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => (
    <HomePageContainer className='homepage'>
        <Directory />
    </HomePageContainer>
);

export default HomePage;
