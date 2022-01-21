import * as React from "react";
import "./InstagramPage.scss";
import NavBar from "./Navbar/Navbar";
import InstaStories from "./InstaStories/InstaStories";
import InstagramBody from "./InstagramBody/InstagramBody"
import InstagramBody2 from "./InstagramBody2/InstagramBody2"
import InstagramBody3 from "./InstagramBody3/InstagramBody3"
import InstagramBody4 from "./InstagramBody4/InstagramBody4"

const InstagramPage = () => {
  return (<div className="main1">
      <NavBar />
      <InstaStories />
      <InstagramBody />
      <InstagramBody2 />
      <InstagramBody3 />
      <InstagramBody4 />
      {/* Body ends here */}
      </div>
  )
};


export default InstagramPage;
