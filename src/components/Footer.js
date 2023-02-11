import React from 'react';
import gitHub from './images/github.256x252.png';
import linkedin from './images/linkedin.png';

const styles = {
    footerStyle: {
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        height: '50px',
        width: '100%',
        background: '#999',
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
    imgStyle: {
        height: '40px',
        with: '60px',
    },
};

function Footer() {
    return(
    <footer style={styles.footerStyle}>
        <div><a  href="https://github.com/IRiceKrispie" target="_blank" rel="noreferrer"><img style={styles.imgStyle} src={gitHub} alt="gitHub logo"></img></a></div>
        <div><a  href="https://www.linkedin.com/in/joseph-sandoval-70b177259/" target="_blank" rel="noreferrer"><img style={styles.imgStyle} src={linkedin} alt="linkedIn logo"></img></a></div>
    </footer>
    );
    
}

export default Footer;