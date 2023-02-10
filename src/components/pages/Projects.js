import React from 'react';
import '../styles/Projects.css';


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
          <a href="https://arcane-hollows-20210.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://media.giphy.com/media/ekY8JdlX7FqQTbteE7/giphy.gif" alt="Project1"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Event Planner</p>
        </div>
      </div>

      <div className='card 3'>
        <div className='card_image'>
          <a href="https://morning-ridge-62197.herokuapp.com/" target="_blank" rel="noreferrer"><img src="https://media.giphy.com/media/W4p2QJMltrvDqp1c0B/giphy.gif" alt="Project1"/></a>
        </div>
        <div className='card_title title-black'>
          <p>Text Editor</p>
        </div>
      </div>

    </div>
  );
}
