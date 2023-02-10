import React from 'react';

const styles = {
    headerStyle: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        background: '#999',
        fontSize: '30px',
        textAlign: 'center',
    },
};
function Header() {
    return(
    <header style={styles.headerStyle}>Joseph Sandoval Houston, TX</header>
    );
    
}

export default Header;