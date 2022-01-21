import React from 'react';
// import InstagramPage from '../Components/InstagtamPage/InstagramPage';
import {InstaStories,
  InstagramBody,
  InstagramBody2,
  InstagramBody3,
  InstagramBody4} from "./Components/InstagtamPage"

const App = () => {
  return <div className='main1'>
  <InstaStories />
    <InstagramBody />
    <InstagramBody2 />
    <InstagramBody3 />
    <InstagramBody4 />
  </div>;
};

export default App;
