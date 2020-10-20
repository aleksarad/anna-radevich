import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <Link className='nav-link' to='/'><h1>Anna Radevich</h1></Link>
            <section>
                <div id="about-container">
                        <Link to='/about' className='nav-link'>
                            <div>about</div>
                        </Link>
                </div>
            </section>
        </nav>
    )
}