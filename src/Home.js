import React from 'react';
import Homepage from "./component/homepage.mp4"
import Twitter from "./component/social/twitter.png"
import Instagram from "./component/social/ig.png"
import Facebook from "./component/social/fb.png"
import Velverly from "./component/logo/velverly.png"
import Profile from "./component/social/my_profile.png"
import Signup from "./component/filler_text.png"
import Line from "./component/social/line.png"
import Demo from "./component/social/demo_text.png"
import Button from "./component/sign_up_button.png"

function Home() {
    return (
      <div className="Home">
        <video
          autoPlay
          loop
          muted
          resizeMode="cover"
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
        >
          <source src={Homepage} type="video/mp4"/>
        </video>
        <div class="logo">
          <img src={Velverly} alt=""/>
        </div>
  
        <div class="row">
          <div class="column_demo">
            <img src={Demo} alt=""/>
          </div>
          <div class="column_line">
            <img src={Line} alt=""/>
          </div>
          <div class="column_prof">
            <img src={Profile} alt=""/>
          </div>
          <div class="column">
            <img src={Instagram}  alt=""/>
          </div>
          <div class="column">
            <img src={Facebook} alt=""/>
          </div>
          <div class="column">
            <img src={Twitter} alt=""/>
          </div>
        </div>
  
        <div class="filler">
          <img src={Signup} alt=""/>
        </div>
  
        <div class="btns">
          <img src={Button} alt=""/>
        </div>
      </div>
    );
  }
  
  export default Home;