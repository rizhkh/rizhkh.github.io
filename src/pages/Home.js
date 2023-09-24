import React, { useEffect, useState } from "react";


import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';
import instagram from '../img/instagram.png';
import git from '../img/git.png';
import ln from '../img/ln.png';

import Links from "../pages/Links";
import HeaderNameInfo from "../pages/HeaderNameInfo";
import HomeAboutMeStatement from "../pages/HomeAboutMeStatement";
import SkillStackClickAbleButtons from "../pages/SkillStack";
import SampleProjects from "../pages/SampleProjects";


export default function Home() {
  return<>
  <div class="topnav">
    <div class="topnavlink">
    <div class="linkBox">
        <a href="https://www.instagram.com/rizhkhan/"><img src={instagram} width="15" height="15" /></a>
      </div>

      <div class="linkBox">
      <a href="https://github.com/rizhkh"><img class="icons" src={git} width="15" height="15" /></a>
      </div>

      <div class="linkBox">
        <a href="https://www.linkedin.com/in/rizhkh/"><img src={ln} width="15" height="15" /></a> 
      </div>
    </div>

    <div class="topnavdetail">
        <div class="label label-tab" style={{backgroundColor: 'transparent'}}>
          <text style={{ color: 'gray'}}>R<text style={{ fontSize:9}}>IZWAN </text></text>
          K<text style={{ fontSize:9}}>HAN ©2023</text>
          </div>
    </div>

  </div>



  <br />
  <div style={{ display: "flex",  flexDirection:"row", position: "relative"}}> 
    <div>
      <HeaderNameInfo />
      <HomeAboutMeStatement />
      <br />
      <SkillStackClickAbleButtons />
      <br/>
    </div>

    <div style={{ padding: "2%"}}>
      <div style={{ backgroundColor: 'yellow', position: "relative"}}>
        <Links />
      </div>
      <br />   
      <SampleProjects />
    </div>

  </div>
  </>;
}
