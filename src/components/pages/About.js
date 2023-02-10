import React from 'react';
import dog from '../images/dog.jpg';
const styles = {
    imgStyle: {
      display: 'flex',
      height: '200px',
      width: '200px',
    },
};

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img style={styles.imgStyle} src={dog} alt={"German Shepherd"}></img>
      <p>
        Some of my qualifications include a coding bootcamp provided by the University of Texas at Austin and a certificate from JP Morgan Chase for completing their virtual training.
      </p>
    </div>
  );
}
