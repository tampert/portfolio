import React from 'react';

const About = () => {
    let geboren = new Date('10/20/1978');
    let nu = new Date();
    let dif = nu.getTime() - geboren.getTime();
    let difdays = dif/(1000 * 3600 * 24);
    let difYears = Math.floor(difdays/365);
    return (
      <div className='route about'>
          {/* <div className="profile-img">
            <img src='./images/dsoentjens_Profil_Bild_small.jpg' width='300' height='280' alt='profile'/>
          </div> */}
          <div className="about-content">
          <h3>About me</h3>
          <ul>
              <li>Name: Dirk Soentjens</li>
              <li>Date of Birth: October 20, 1978</li>
              <li>Age : {difYears}</li>
              <li>Gender : Male</li>
              <li>Place of Birth: Maasbracht, The Netherlands</li>
          </ul>
          <h3>Career objective</h3>
          <p>To be able to work for an enouraging and stable company that will assist me in developing, impoving and obtaining the necessary skills in order to become the best engineer possible.</p>
          <h3>Education</h3>
          <ul>
              <li><strong>Bachelor degree </strong></li>
              <li>Bachelor of Arts, Interaction design</li>
              <li>Hogeschool voor de Kunsten Utrecht</li>
              <li><strong>2002-2006</strong></li>
          </ul>
          <ul>
              <li><strong>Multimedia</strong></li>
              <li>MTS Sint Lucas Boxtel</li>
              <li><strong>1998-2002</strong></li>
          </ul>
          <h3>Work experience</h3>
          <ul>
              <li><strong>Software Engineer</strong></li>
              <li>trivago N.V.</li>
              <li>Düsseldorf, Germany</li>
              <li><strong>2014-2020</strong></li>
          </ul>
          <ul>
              <li><strong>Interaction Modeler</strong></li>
              <li>Océ Technologies | Caonon design</li>
              <li>Venlo, The Netherlands</li>
              <li><strong>2008-2014</strong></li>
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
      </div>
    )
}

export default About;