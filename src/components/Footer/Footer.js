import React from 'react'
import './footer.css'

function Footer() {

    const date = new Date();
    var today = date.getFullYear()

    return (
        <footer id='footer'>
            <p>© Copyright {today}</p>
            <p>Designed & Built by <b>Michael Cecchini</b></p>
        </footer>
    )
}

export default Footer;