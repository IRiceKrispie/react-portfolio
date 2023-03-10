import React from 'react';
import '../styles/Projects.css';
import blogPic from '../images/blog2.png';


//cards displaying my projects
export default function Projects() {
  return (
    <div className='cards-list'>
      <div className='card 1'>
        <div className='card_image'>
          <a href="https://janvierb1.github.io/The-Movie-Library/" target="_blank" rel="noreferrer"><img src="https://media.giphy.com/media/nNUUhTml69NLV3ksaR/giphy.gif" alt="Project1"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Movie DB</p>
        </div>
      </div>

      <div className='card 2'>
        <div className='card_image'>
          <a href="https://arcane-hollows-20210.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://media.giphy.com/media/ekY8JdlX7FqQTbteE7/giphy.gif" alt="Project2"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Event Planner</p>
        </div>
      </div>

      <div className='card 3'>
        <div className='card_image'>
          <a href="https://morning-ridge-62197.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://media.giphy.com/media/W4p2QJMltrvDqp1c0B/giphy.gif" alt="Project3"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Text Editor</p>
        </div>
      </div>

      <div className='card 4'>
        <div className='card_image'>
          <a href="https://iricekrispie.github.io/challenge-3/" target="_blank" rel="noreferrer"><img src="https://media.giphy.com/media/PbMdZc61lcD47mZRJo/giphy.gif" alt="Project4"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Password Generator</p>
        </div>
      </div>

      <div className='card 5'>
        <div className='card_image'>
          <a href="https://iricekrispie.github.io/challenge-5/" target="_blank" rel="noreferrer"><img src={blogPic} alt="blogOnComputer"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Scheduler</p>
        </div>
      </div>

      <div className='card 6'>
        <div className='card_image'>
          <a href="https://github.com/IRiceKrispie/Social-Network-API" target="_blank" rel="noreferrer"><img src="https://media.giphy.com/media/jQmn1Dkw55R3cjm3eC/giphy.gif" alt="project6"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Social Network API</p>
        </div>
      </div>

      <div className='card 7'>
        <div className='card_image'>
          <a href="https://operation-wellness-rsb.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://media.giphy.com/media/13twUEuUnCrEju/giphy.gif" alt="project7"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Operation Wellness</p>
        </div>
      </div>

    </div>
  );
}
