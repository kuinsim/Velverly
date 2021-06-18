import React from 'react';
import Homepage from "./component/homepage.mp4"
import Twitter from "./component/social/twitter.png"
import Instagram from "./component/social/ig.png"
import Facebook from "./component/social/fb.png"
import Velverly from "./component/velverly.png"
import Design from "./component/logo/design.png"
import Share from "./component/logo/Share.png"
import Surprise from "./component/logo/Surprise.png"

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
            <div class="column_main">
            <img src={Velverly} alt=""/>
            </div>
            <div class="column_sub">
            <img src={Design} alt=""/>
            </div>
            <div class="column_sub">
            <img src={Share} alt=""/>
            </div>
            <div class="column_sub">
            <img src={Surprise} alt=""/>
            </div>
        </div>
    
        <div class="row">
            <div class="column">
            <img src={Instagram} class="twt" alt=""/>
            </div>
            <div class="column">
            <img src={Facebook} class="twt" alt=""/>
            </div>
            <div class="column">
            <img src={Twitter} class="twt" alt=""/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;