import React, { useEffect } from 'react'
import './Team.css'
import { Card } from '../components/Card.js'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"

import { useState } from "react"

export const Team = () => {

  const [angle, setAngle] = useState(0);
  const count = 5;

  useEffect(() => { document.querySelector(".carousel").style.transform = "rotateY(" + angle + "deg)"; }, [angle]);

  const next = (e) => {
        
    setAngle(angle => angle - (360 / count));
    document.querySelector(".carousel").style.transform = "rotateY(" + angle + "deg)";

  }

  const prev = (e) => {
        
    setAngle(angle => angle + (360 / count));
    document.querySelector(".carousel").style.transform = "rotateY(" + angle + "deg)";
    
  }

  return (

    <>

    <div className = "content" id="team">

        <div className = "carouselContainer">

          <div className = "carousel">

            {/* <Card index = "a"
                  name = "Gerard Swami"
                  role = "Swami of the Sacred Heart"
                  linkedIn = "https://www.linkedin.com/in/gerard-swami/"
                  github = "https://github.com/swami-gerard"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=swami@gerard.com&tf=cm"
                  link = "https://stackoverflow.com/#"/> */}

            <Card index = "a"
                  name = "Shiven Patel"
                  role = "Co-Founder"
                  linkedIn = "https://www.linkedin.com/in/shiven-patel-467bb4233/"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=patelshiven1@gmail.com&tf=cm"/>


            <Card index = "b"
                  name = "Aryan Gupta"
                  role = "Co-Founder | Web Dev | Graphics"
                  linkedIn = "https://www.linkedin.com/in/aryan-g/"
                  github = "https://github.com/aryan-cs"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=aryan05g@gmail.com&tf=cm"/>

            <Card index = "c"
                  name = "Sid Dayaneni"
                  role = "Co-Founder | Web Dev"
                  linkedIn = "https://www.linkedin.com/in/siddharth-dayaneni-025119262/"
                  github = "https://github.com/SidD11111"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=siddharth.dayaneni@gmail.com&tf=cm"/>


            <Card index = "d" 
                  name = "Ankit Rath"
                  role = "Co-Founder"
                  linkedIn = "https://www.linkedin.com/in/ankit-rath-967163249/"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=rathankit27@gmail.com&tf=cm"/>

            {/* <Card index = "c" 
                  name = "DDGG"
                  role = "Playboy DD"
                  linkedIn = "https://www.linkedin.com/in/ankit-rath-967163249/"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=rathankit27@gmail.com&tf=cm"/> */}

            <Card index = "e"
                  name = "Siya Choudhary"
                  role = "Web Dev"
                  linkedIn = "https://www.linkedin.com/in/siya-choudhary-2b0b89229/"
                  github = "https://github.com/siyachoudhary"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=siyacanvas@gmail.com&tf=cm"/>

            {/* <Card index = "e"
                  name = "King Sharby"
                  role = "hey guys"
                  linkedIn = "https://www.linkedin.com/in/shiven-patel-467bb4233/"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=patelshiven1@gmail.com&tf=cm"/> */}
{/* 
            <Card index = "g"
                  name = "NAME"
                  role = "ROLE"
                  linkedIn = ""
                  github = ""
                  email = ""
                  link = ""/>

            <Card index = "h" name = "8"/>
            <Card index = "i" name = "9"/>
            <Card index = "j" name = "10"/>
            <Card index = "k" name = "11"/>
            <Card index = "l" name = "12"/>
            <Card index = "m" name = "13"/>
            <Card index = "n" name = "14"/>
            <Card index = "o" name = "15"/> */}

          </div>

        </div>

        <div className = "next" onClick = {next}><MdOutlineArrowForwardIos /></div>
        <div className = "prev" onClick = {prev}><MdOutlineArrowBackIos /></div>

      </div>

      <p className = "honorableMentions">

            Thank you to Kush Patel and Sneha Adhikari for your contributions to the cause!

      </p>

      </>

  )

}