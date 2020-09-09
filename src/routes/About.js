import React from 'react';

const About = () => {
    let geboren = new Date('10/20/1978');
    let nu = new Date();
    let dif = nu.getTime() - geboren.getTime();
    let difdays = dif/(1000 * 3600 * 24);
    let difYears = Math.floor(difdays/365);
    return (
      <div className='route'>
          <h3>About me</h3>
          <ul>
              <li>Name: Dirk Soentjens</li>
              <li>Date of Birth: October 20, 1978</li>
              <li>Age : {difYears}</li>
              <li>Gender : Male</li>
              <li>Place of Birth</li>
          </ul>
          <h3>Interests</h3>
          <ul>
              <li>Online video games</li>
              <li>Squash</li>
              <li>Kicker</li>
              <li>Problem solving</li>
              <li>Motorbike</li>
              <li>Physical Activities (Snowboarding, hiking, etc)</li>
              <li>Coffee</li>
          </ul>
          <h3>Hobbies</h3>
          <ul>
              <li>Traveling</li>
              <li>Coding</li>
              <li>Gaming</li>
              <li>Sports</li>
              <li>Music</li>
          </ul>
      </div>
    )
}

export default About;