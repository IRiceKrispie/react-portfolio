import React from 'react';
import profilePic from '../images/profilePic.jpg';


const styles = {
    imgStyle: {
      height: '200px',
      width: '200px',
    },

    divStyle: {
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '5000px',
      justifyContent: 'center',
    }
};

export default function About() {
  return (
    <div style={styles.divStyle}>
      <h1>About Page</h1>
      <img style={styles.imgStyle} src={profilePic} alt={"My picture"}></img>
      <p>
        Some of my qualifications include a coding bootcamp provided by the University of Texas at Austin and a certificate from JP Morgan Chase for completing their virtual training.
      </p>
      <object width="400" height="400" type="application/pdf" data="https://drive.google.com/file/d/1QtnlwpPyJ-Sr9-xDwPTeSqi8_6UE8Dy6/preview">
        <p>Insert your error message here, if the PDF cannot be displayed.</p>
      </object>
      
    </div>
  );
}
