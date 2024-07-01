import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='nav'>
                    <nav className='flex'>
                        <ul className=''>
                            <li>About Me</li>
                            <li>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.</li>
                            <li>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</li>
                        </ul>
                        <ul>
                            <li>Newsletter</li>
                            <li>Stay updated with our latest trends</li>
                            <li><input className='border-solid' type="text" /><button><ArrowRight /></button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

