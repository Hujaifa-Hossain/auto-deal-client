import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeExplore from '../HomeExplore/HomeExplore';
import HomeExtra from '../HomeExtra/HomeExtra';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeExplore></HomeExplore>
            <Review></Review>
            <HomeExtra></HomeExtra>
        </div>
    );
};

export default Home;