import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeExplore from '../HomeExplore/HomeExplore';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeExplore></HomeExplore>
            <Review></Review>
        </div>
    );
};

export default Home;