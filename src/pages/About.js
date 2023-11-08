import React from 'react'
import './About.css'
import "./AllPages.css"

export const About = () => {

  return (

    <div id='about'>

        <header className = "Shadowed Gradient About-header">

          WHO ARE WE?

        </header>

        <div className = "About-body">

          <p className = "About-text">

          We are <b>Run for Water</b>, a youth-driven nonprofit organization dedicated to providing clean drinking
          water to underprivelaged villages in third-world countries. Established by a group of
          passionate high school students in 2022, our mission is to turn compassion into action.
          Through <b>annual 5K events</b>, we raise funds and awareness to initiate sustainable water
          projects in remote communities, transforming lives one drop at a time. Join us in
          our unwavering commitment to making <b>clean water accessible to all</b>, and be part of
          a movement that creates lasting change across the globe.
          <br /> <br />
          <a href = "https://thewaterproject.org/community/projects/kenya/spring-protection-wash-project-22008" target = "_blank" rel = "noreferrer">
            <b>Muchini Community</b>
          </a>
          &nbsp; | &nbsp;
          <a href = "https://thewaterproject.org/community/projects/kenya/spring-protection-wash-project-22040" target = "_blank" rel = "noreferrer">
            <b>Elunyu Community</b>
          </a>
          &nbsp; | &nbsp;
          <a href = "https://www.suburbtalk.com/2022/09/06/making-clean-water-accessible-one-stride-at-a-time/" target = "_blank" rel = "noreferrer">
            <b>Suburb Talk</b>
          </a>
          {/* This year, we will host our annual 5K Run & Walk event at <b>Busse Woods Grove 29</b>,
          on <b>September 24th</b>, at <b>9:00 AM</b> and aim to raise <b>$5,000</b> to aid villages in <b>Rajasthan, India</b>.
          <br /> <br />
          All runners will receive <b>4 volunteer hours</b> for participating in the event! */}

          </p>

          <img
             src = {process.env.PUBLIC_URL + "/assets/collage.png"}
             alt = ""
             onError = {({ currentTarget }) => {
               currentTarget.onerror = null;
               currentTarget.src = process.env.PUBLIC_URL + "/assets/rfw.png";
             }}
             className = "About-collage"/>

        </div>
        
    </div>

  )
}
